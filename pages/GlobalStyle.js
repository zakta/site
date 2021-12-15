import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: white;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;

    &.hideOverflow{
      overflow-y: hidden;
    }

    h2 {
    font-size: 40px;
    color: #1a3968;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    padding: 1.5rem;
    line-height: 50px;
  }
  }
`;
