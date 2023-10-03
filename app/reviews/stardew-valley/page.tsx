import React from 'react';
import Heading from '@/components/Heading';

const StardewValleyPage: React.FC = () => {
  return (
    <>
      <Heading textContent='Stardew Valley' />
      <img src='/images/stardew-valley.jpg' alt='' width='640' height='360' className='mb-2 rounded' />
      <p>This game rocks!</p>
    </>
  );
};

export default StardewValleyPage;
