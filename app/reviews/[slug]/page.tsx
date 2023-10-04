import React from 'react';

import Heading from '@/components/Heading';
import { ReviewPageProps } from '@/app/@types/props';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/graphql/reviews/reviews.model';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

// export const generateStaticParams = async () => {
//   const slugs = await getSlugs();
//   return slugs.map((slug: string) => ({ slug }));
// };

export const generateMetadata = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title
  };
};

const ReviewPage: React.FC<ReviewPageProps> = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  
  if (!review) {
    notFound();
  }

  return (
    <>
      <Heading textContent={review.title} />
      <p className='font-semibold pb-3'>{review.subtitle}</p>
      <div className='flex gap-3 items-baseline'>
        <p className='italic pb-2'>{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        priority
        src={review.image}
        alt=''
        width='640'
        height='360'
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='max-w-screen-sm prose prose-slate'
      />
    </>
  );
};

export default ReviewPage;
