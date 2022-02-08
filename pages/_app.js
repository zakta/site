// 3rd parties
import AOS from 'aos';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

// Styles
import GlobalStyle from '../components/GlobalStyle/styles';

const App = function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 180,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
