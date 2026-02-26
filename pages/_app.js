import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Handle the Initial Load ONLY ONCE
    // We check if the window is defined (client-side)
    if (typeof window !== 'undefined') {
       setLoading(true);
       const initialTimer = setTimeout(() => setLoading(false), 2000);
       
       // Cleanup initial timer if user navigates away immediately
       return () => clearTimeout(initialTimer);
    }
  }, []); // Run ONLY on mount

  useEffect(() => {
    // 2. Handle Route Changes separately
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      // Use a shorter delay for navigation than for initial load
      setTimeout(() => setLoading(false), 800);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]); // Listen for path changes

  return (
    <>
      {/* Use router.asPath as key to reset animations */}
      {loading && <Loader key={router.asPath} />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;