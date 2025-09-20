import { NextRequest, NextResponse } from 'next/server';
import { allProducts, searchProducts, getProductsByCategory } from '@/data/products';
import { ApiResponse, Product } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page') || '1';

    let products: Product[] = allProducts;

    // Apply search filter
    if (query) {
      products = searchProducts(query);
    }

    // Apply category filter
    if (category && category !== 'All') {
      products = getProductsByCategory(category);
    }

    // Apply pagination
    const pageSize = limit ? parseInt(limit) : 12;
    const pageNumber = parseInt(page);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const response: ApiResponse<{
      products: Product[];
      pagination: {
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
      };
    }> = {
      success: true,
      message: 'Products retrieved successfully',
      data: {
        products: paginatedProducts,
        pagination: {
          page: pageNumber,
          pageSize,
          total: products.length,
          totalPages: Math.ceil(products.length / pageSize),
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ApiResponse<null> = {
      success: false,
      message: 'Failed to retrieve products',
      data: null,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}