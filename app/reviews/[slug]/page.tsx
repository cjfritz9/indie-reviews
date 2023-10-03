import React from 'react';
import { getReview, getSlugs } from '@/lib/review';

import Heading from '@/components/Heading';
import { ReviewPageProps } from '@/app/@types/props';

export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
};

const ReviewPage: React.FC<ReviewPageProps> = async ({ params }) => {
  const { title, date, image, body } = await getReview(params.slug);
  return (
    <>
      <Heading textContent={title} />
      <p className='italic pb-2'>{date}</p>
      <img
        src={image}
        alt=''
        width='640'
        height='360'
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className='max-w-screen-sm prose prose-slate'
      />
    </>
  );
};

export default ReviewPage;
