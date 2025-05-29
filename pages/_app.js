import '../src/static/css/main.scss';
import Main from '../src/layouts/Main';
import ScrollToTop from '../src/components/Template/ScrollToTop';

export default function MyApp({ Component, pageProps }) {
  return (
    <Main>
        <ScrollToTop />
        <Component {...pageProps} />
    </Main>
  );
}