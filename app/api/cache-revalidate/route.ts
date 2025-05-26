import { API_TAGS } from '@/models/constants';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 0;

/**
 * @description The key to clear the cache
 * This is a public key that can be used to clear the cache for a given tag
 */
const CACHE_REVALIDATE_KEY = process.env.NEXT_CACHE_REVALIDATE_KEY;

/**
 * @description Revalidate the cache for a given tag
 * @param req - The request object
 * @returns The response object
 */

export async function GET(req: NextRequest) {
  if (!CACHE_REVALIDATE_KEY) {
    return NextResponse.json({ message: 'Cache revalidate key is not set' }, { status: 500 });
  }

  const key = req.nextUrl.searchParams.get('key');
  if (!key || key !== CACHE_REVALIDATE_KEY) {
    return NextResponse.json({ message: 'Invalid or missing key' }, { status: 401 });
  }

  const tag = req.nextUrl.searchParams.get('tag');
  if (!tag) {
    return NextResponse.json({ message: 'Tag is required' }, { status: 400 });
  }

  if (!API_TAGS[tag as keyof typeof API_TAGS]) {
    return NextResponse.json({ message: 'Invalid tag' }, { status: 400 });
  }

  try {
    revalidateTag(tag);
    return NextResponse.json({ message: 'Cache cleared successfully', tag });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to clear cache', error: String(error) },
      { status: 500 }
    );
  }
}
