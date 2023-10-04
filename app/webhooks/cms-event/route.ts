import { CACHE_TAG_REVIEWS } from '@/graphql/reviews/reviews.model';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const payload = await req.json();

  if (payload.model === 'review') {
    revalidateTag(CACHE_TAG_REVIEWS)
  }
  return new Response(null, { status: 204 });
};
