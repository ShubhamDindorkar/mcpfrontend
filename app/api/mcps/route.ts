import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'mcp-scraped-data', 'scraped-dependents.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Parse search param safely for Node.js runtime
    const url = new URL(request.url, 'http://localhost');
    const search = url.searchParams.get('search');
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '9', 10);
    const start = (page - 1) * limit;
    const end = start + limit;

    let filtered = data;
    if (search) {
      const s = search.toLowerCase();
      filtered = data.filter(
        (item: any) =>
          item.package.toLowerCase().includes(s) ||
          (item.readme && item.readme.toLowerCase().includes(s))
      );
    }
    // Return the correct slice and total count
    return NextResponse.json({
      results: filtered.slice(start, end),
      total: filtered.length,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load MCP data.' }, { status: 500 });
  }
} 