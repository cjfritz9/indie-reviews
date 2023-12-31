import React, { PropsWithChildren, type ReactNode } from 'react';
import './globals.css';
import NavBar from '../components/NavBar';
import * as fonts from './fonts';


export const metadata = {
  title: { default: 'Indie Reviews', template: '%s | Indie Reviews' },
  description: 'The best indie games, reviewed by us, for you.'
};

const fontList = Object.values(fonts)
  .map((font) => font.variable)
  .join(' ');

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
