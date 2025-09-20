"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  try {
    switch (action.type) {
      case 'ADD_ITEM': {
        const { product, quantity } = action.payload;

        // Validate product data
        if (!product || !product.id || !product.name || !product.price) {
          console.error('Invalid product data:', product);
          return state;
        }

        const existingItem = state.items.find(item => item.product.id === product.id);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity }];
      }

      const total = newItems.reduce(
        (sum, item) => sum + parseFloat(item.product.price.replace(/[€,]/g, '')) * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.payload);
      const total = newItems.reduce(
        (sum, item) => sum + parseFloat(item.product.price.replace(/[€,]/g, '')) * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: productId });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const total = newItems.reduce(
        (sum, item) => sum + parseFloat(item.product.price.replace(/[€,]/g, '')) * item.quantity,
        0
      );
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

      default:
        return state;
    }
  } catch (error) {
    console.error('Error in cart reducer:', error);
    return state;
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  const addItem = (product: Product, quantity = 1) => {
    try {
      if (!product || quantity <= 0) {
        console.error('Invalid add item parameters:', { product, quantity });
        return;
      }
      dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeItem = (productId: string) => {
    try {
      if (!productId) {
        console.error('Invalid product ID for removal:', productId);
        return;
      }
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    try {
      if (!productId || quantity < 0) {
        console.error('Invalid update quantity parameters:', { productId, quantity });
        return;
      }
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const clearCart = () => {
    try {
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}