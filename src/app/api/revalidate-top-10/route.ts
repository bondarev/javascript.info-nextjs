import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { CACHE_TAGS } from '@/lib/constants';

export async function GET() {
  revalidateTag(CACHE_TAGS.TOP_10_RACKETS, 'max');

  return NextResponse.json({
    success: true,
    revalidatedAt: new Date(),
  });
}
