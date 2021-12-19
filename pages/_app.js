import GlobalStyle from "./GlobalStyle"

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  )
}

export default App
