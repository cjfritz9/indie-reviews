'use client';

import React, { useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';

const ShareLinkButton: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <button
      className='border flex items-center gap-1 px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
      onClick={handleClick}
    >
      <LinkIcon className='h-4 w-4' />
      {clicked ? 'Link copied!' : 'Share link'}
    </button>
  );
};

export default ShareLinkButton;
