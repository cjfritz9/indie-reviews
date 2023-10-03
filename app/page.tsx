import React from 'react';
import Heading from '../components/Heading';
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/review';

const HomePage: React.FC = async () => {
  const featuredReview = await getFeaturedReview();
  return (
    <>
      <Heading textContent='Indie Game Reviews' />
      <p className='pb-3'>The best indie games, reviewed by us, for you.</p>
      <div className='bg-white border w-80 sm:w-full rounded shadow hover:shadow-xl'>
        <Link
          href={`/reviews/${featuredReview.slug}`}
          className='flex flex-col sm:flex-row'
        >
          <img
            src={featuredReview.image}
            alt=''
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
