import Link from 'next/link';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  href: string;
  page: number;
  pageCount: number;
}

const PaginationBar: React.FC<Props> = ({ href, page, pageCount }) => {
  return (
    <div className='flex gap-2 items-center'>
      {page > 1 ? (
        <PaginationLink href={`${href}?page=${page - 1}`}>
          <ChevronLeftIcon className='h-5 w-5' />
          <span className='sr-only'>Previous Page</span>
        </PaginationLink>
      ) : (
        <span className='w-5' />
      )}
      <span>
        Page {page} of {pageCount}
      </span>
      {page < pageCount && (
        <PaginationLink href={`${href}?page=${page + 1}`}>
          <ChevronRightIcon className='h-5 w-5' />
          <span className='sr-only'>Next Page</span>
        </PaginationLink>
      )}
    </div>
  );
};

interface PaginationLinkProps {
  children: React.ReactNode;
  href: string;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({ children, href }) => {
  return (
    <Link
      prefetch={true}
      href={href}
      className='border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
    >
      {children}
    </Link>
  );
};

export default PaginationBar;
