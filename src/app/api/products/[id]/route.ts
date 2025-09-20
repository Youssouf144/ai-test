import { NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/data/products';
import { ApiResponse, Product } from '@/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
      const notFoundResponse: ApiResponse<null> = {
        success: false,
        message: 'Product not found',
        data: null,
      };
      return NextResponse.json(notFoundResponse, { status: 404 });
    }

    const response: ApiResponse<Product> = {
      success: true,
      message: 'Product retrieved successfully',
      data: product,
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ApiResponse<null> = {
      success: false,
      message: 'Failed to retrieve product',
      data: null,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}