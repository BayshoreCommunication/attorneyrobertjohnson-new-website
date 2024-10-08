import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import NavTopBar from '@/components/NavTopBar';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Florida Personal Injury Attorney Robert Johnson',
  description: '',
  metadataBase: new URL('https://www.attorneyrobertjohnson.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={OpenSans.className}>
        <Providers>
          <div className='overflow-x-hidden text-black bg-white'>
            <NavTopBar />
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
