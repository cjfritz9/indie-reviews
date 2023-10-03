import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='font-orbitron font-bold text-orange-800 hover:underline underline-offset-4'
          >
            Indie Reviews
          </Link>
        </li>
        <li className='ml-auto'>
          <Link
            href='/reviews'
            className='text-orange-800 hover:underline underline-offset-4'
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='text-orange-800 hover:underline underline-offset-4'
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
