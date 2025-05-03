import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '21');
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || 'newest';

    // Calculate pagination
    const skip = (page - 1) * pageSize;

    // Build where clause for filtering
    const where: Prisma.PackageWhereInput = {};
    if (search) {
      where.OR = [
        { package_name: { contains: search, mode: 'insensitive' } },
        { readme: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Count total packages for pagination
    const totalCount = await prisma.package.count({ where });
    
    // Fetch packages with pagination
    const packages = await prisma.package.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: sort === 'newest' 
        ? { created_at: 'desc' } 
        : { package_name: 'asc' } // Using package_name length as a substitute for popularity
    });
    
    return NextResponse.json({
      packages,
      meta: {
        currentPage: page,
        pageSize,
        totalPages: Math.ceil(totalCount / pageSize),
        totalCount
      }
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    );
  }
} 