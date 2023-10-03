import React from 'react';
import { HeadingProps } from '../@types/props';
import { orbitron } from '@/fonts';

const Heading: React.FC<HeadingProps> = ({ textContent }) => {
  return <h1 className='font-bold pb-3 text-2xl font-orbitron'>{textContent}</h1>;
};

export default Heading;
