import React from 'react';
import PropTypes from 'prop-types'; // Move this to the top
import '../src/static/css/main.scss';
import Main from '../src/layouts/Main';
import ScrollToTop from '../src/components/Template/ScrollToTop';

const MyApp = ({ Component, pageProps }) => (
  <Main>
    <ScrollToTop />
    <Component {...pageProps} />
  </Main>
);

MyApp.propTypes = {
  Component: PropTypes.elementType,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  Component: undefined,
  pageProps: {},
};

export default MyApp;
