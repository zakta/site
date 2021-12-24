// Local
import GlobalStyle from './GlobalStyle';

const App = function AppNext({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

export default App;
