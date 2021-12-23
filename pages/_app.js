import GlobalStyle from './GlobalStyle';

const App = function ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

export default App;
