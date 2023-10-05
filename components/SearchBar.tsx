'use client';

import useIsClient from '@/lib/hooks/useIsClient';
import { Combobox } from '@headlessui/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const { isClient } = useIsClient();
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        const response = await axios.get(
          `/api/search?query=${encodeURIComponent(debouncedQuery)}`,
          { signal: controller.signal }
        );
        const { data: results } = response;
        if (!results.length) {
          setGames([{ title: 'No Results', slug: '/' }]);
        } else {
          setGames(response.data);
        }
      })();
      return () => {
        controller.abort();
      };
    } else {
      setGames([]);
    }
  }, [debouncedQuery]);

  if (!isClient) {
    return null;
  }

  const handleChange = (slug: string) => {
    router.push(`/reviews/${slug}`);
  };

  return (
    <div className='relative w-64'>
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder='Search...'
          className='border px-2 py-1 rounded w-64'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className='absolute bg-white py-1 w-full'>
          {games.map((game: any) => (
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
