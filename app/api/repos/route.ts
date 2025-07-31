import { NextResponse } from 'next/server';
import { fetchRepositories } from '@/lib/github';

export const dynamic = 'force-dynamic'; // Ensure we get fresh data on each request

export async function GET() {
  try {
    const repos = await fetchRepositories();
    return NextResponse.json(repos);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
