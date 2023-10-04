'use client';

import useIsClient from '@/lib/hooks/useIsClient';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface SearchBarProps {
  games: any[];
}

const SearchBar: React.FC<SearchBarProps> = ({ games }) => {
  const router = useRouter();
  const { isClient } = useIsClient();
  const [query, setQuery] = useState('');

  if (!isClient) {
    return null;
  }

  const handleChange = (slug: string) => {
    router.push(`/reviews/${slug}`);
  };

  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log({ games })

  return (
    <div className='relative w-48'>
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder='Search...'
          className='border px-2 py-1 rounded'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className='absolute bg-white py-1 w-full'>
          {filtered.map((game: any) => (
            <Combobox.Option key={game.slug} value={game.slug}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? 'bg-orange-100' : 'bg-white'
                  }`}
                >
                  {game.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchBar;
