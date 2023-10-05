import { getSearchableReviews } from '@/graphql/reviews/reviews.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query');
  const results = await getSearchableReviews(query);
  return NextResponse.json(results);
};
