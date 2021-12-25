// 3rd parties
import PropTypes from 'prop-types';

// Local
import GlobalStyle from './GlobalStyle';

const App = function App({ Component, pageProps }) {
  return (
    <>
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
