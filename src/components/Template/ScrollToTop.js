import { useEffect } from 'react';
import { useRouter } from 'next/router';

// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
const ScrollToTop = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
