import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <NavLink
          href='/'
          prefetch
          styles={{ className: 'text-orange-800 font-bold font-orbitron' }}
        >
          Indie Reviews
        </NavLink>
        <NavLink href='/reviews' prefetch liStyles={{ className: 'ml-auto' }}>
          Reviews
        </NavLink>
        <NavLink href='/about' prefetch={false}>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
