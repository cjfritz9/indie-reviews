import React from 'react';
import Heading from '../components/Heading';
import Link from 'next/link';
import { getFeaturedReviews } from '@/graphql/reviews/reviews.model';
import Image from 'next/image';

const HomePage: React.FC = async () => {
  const reviews = await getFeaturedReviews(3);
  console.log(
    '[HomePage] rendering: ',
    reviews.map((review) => review.slug).join(', ')
  );
  return (
    <>
      <Heading textContent='Indie Reviews' />
      <p className='pb-3'>The best indie games, reviewed by us, for you.</p>
      <ul className='flex flex-col gap-3'>
        {reviews.map((review: any, i: number) => (
          <li
            key={review.slug}
            className='bg-white border w-80 sm:w-full rounded shadow hover:shadow-xl'
          >
            <Link
              href={`/reviews/${review.slug}`}
              className='flex flex-col sm:flex-row'
            >
              <Image
                priority={i === 0}
                src={review.image}
                alt=''
                width='320'
                height='180'
                className='rounded-t sm:rounded-l sm:rounded-r-none'
              />
              <div className='px-2 py-1 text-center sm:text-left'>
                <h2 className='font-semibold font-orbitron'>{review.title}</h2>
                <p className='hidden pt-2 sm:block'>{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
