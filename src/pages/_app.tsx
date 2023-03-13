import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode={'wait'}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
