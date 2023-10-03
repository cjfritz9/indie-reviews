'use client';

import React, { useState } from 'react';

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
      className='border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
      onClick={handleClick}
    >
      {clicked ? 'Link copied!' : 'Share link'}
    </button>
  );
};

export default ShareLinkButton;
