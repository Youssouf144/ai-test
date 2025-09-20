export interface Category {
  name: string;
  emoji: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}