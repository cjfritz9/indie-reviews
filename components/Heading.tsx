import React from 'react';
import { HeadingProps } from '../app/@types/props';
import { orbitron } from '@/app/fonts';

const Heading: React.FC<HeadingProps> = ({ textContent }) => {
  return (
    <h1 className='font-bold pb-3 text-2xl font-orbitron'>{textContent}</h1>
  );
};

export default Heading;
