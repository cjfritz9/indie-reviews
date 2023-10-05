import React from 'react';
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getReviews } from '@/graphql/reviews/reviews.model';
import Image from 'next/image';
import PaginationBar from '@/components/PaginationBar';
import SearchBar from '@/components/SearchBar';

export const metadata = {
  title: 'Reviews'
};

const ReviewsPage: React.FC<any> = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const { pageCount, reviews } = await getReviews(page);

  return (
    <>
      <Heading textContent='Reviews' />
      <div className='flex justify-between pb-3'>
        <PaginationBar href='/reviews' page={page} pageCount={pageCount} />
        <SearchBar />
      </div>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review: any, i: number) => (
          <li
            key={review.slug}
            className='bg-white border w-80 rounded shadow hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                priority={i === 0}
                src={review.image}
                alt=''
                width='320'
                height='180'
                className='rounded-t'
              />
              <h2 className='font-semibold font-orbitron py-1 text-center'>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const parsePageParam = (paramValue: string) => {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
};

export default ReviewsPage;
