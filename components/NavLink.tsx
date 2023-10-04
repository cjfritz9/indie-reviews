'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
  prefetch?: boolean;
  styles?: any;
  liStyles?: any;
}

const NavLink: React.FC<Props> = ({
  children,
  href,
  prefetch,
  styles,
  liStyles
}) => {
  const pathname = usePathname();
  return (
    <li {...liStyles}>
      {pathname !== href && (
        <Link
          href={href}
          prefetch={prefetch}
          className='text-orange-800 hover:underline underline-offset-4'
          {...styles}
        >
          {children}
        </Link>
      )}
    </li>
  );
};

export default NavLink;
