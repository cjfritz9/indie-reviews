import React from 'react';
import Heading from '@/components/Heading';

export const metadata = {
  title: 'About'
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <Heading textContent='About Indie Reviews' />
      <p>Founded literally right now, we review indie games!</p>
    </div>
  );
};

export default AboutPage;
