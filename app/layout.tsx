import React, { type ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import NavBar from '../components/NavBar';
import * as fonts from './fonts';

interface Props {
  children: ReactNode;
}

const fontList = Object.values(fonts)
  .map((font) => font.variable)
  .join(' ');

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en' className={fontList}>
      <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs text-slate-500'>
          Game data and images courtesy of{' '}
          <a
            href='https://rawg.io'
            target='_blank'
            className='text-orange-800 hover:underline underline-offset-4'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
