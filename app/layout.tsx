import React, { type ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

interface Props {
  children: ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Game data and images courtesy of{' '}
          <a href='https://rawg.io' target='_blank'>
            RAWG.io
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
