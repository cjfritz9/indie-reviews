import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='text-orange-800 hover:underline underline-offset-4'
          >
            Home
          </Link>
        </li>
        <li>
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
