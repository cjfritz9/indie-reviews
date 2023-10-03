import React from 'react';
import Heading from '@/components/Heading';

const HollowKnightPage: React.FC = () => {
  return (
    <div>
      <Heading textContent='Hollow Knight' />
      <img src='/images/hollow-knight.jpg' alt='' width='640' height='360' className='mb-2 rounded' />
      <p>This game rocks!</p>
    </div>
  );
};

export default HollowKnightPage;
