import Heading from '@/components/Heading';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Heading textContent='Not Found' />
      <p>Oops, the page you requested only exists in a parallel universe.</p>
    </>
  );
};

export default NotFoundPage;
