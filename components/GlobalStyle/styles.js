// 3rd parties
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;

    &.hideOverflow{
      overflow-y: hidden;

      @media (min-width: 980px){
        overflow-y: visible;
      }
    }

    h2 {
      font-size: 40px;
      color: #1a3968;
      margin: 0;
      text-transform: uppercase;
      margin: 0;
      line-height: 50px;
    }
  }

  ::selection {
    background-color: #33afad;
    color: white;
  }
`;

export default GlobalStyle;
