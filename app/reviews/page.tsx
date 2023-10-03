import React from 'react';
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getReviews } from '@/lib/review';

const ReviewsPage: React.FC = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading textContent='Reviews' />
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border w-80 rounded shadow hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
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

export default ReviewsPage;
