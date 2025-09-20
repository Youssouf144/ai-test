import { NextResponse } from 'next/server';
import { categories } from '@/data/categories';
import { allProducts } from '@/data/products';
import { ApiResponse, Category } from '@/types';

export async function GET() {
  try {
    // Add product counts to categories
    const categoriesWithCounts = categories.map(category => ({
      ...category,
      productCount: allProducts.filter(product => product.category === category.name).length
    }));

    const response: ApiResponse<typeof categoriesWithCounts> = {
      success: true,
      message: 'Categories retrieved successfully',
      data: categoriesWithCounts,
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ApiResponse<null> = {
      success: false,
      message: 'Failed to retrieve categories',
      data: null,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}