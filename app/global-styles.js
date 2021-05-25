import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  select {
    font-family: Segoe UI, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    font-size:14px
  }
  button {
    border-radius:0px;
  }
  .bmargin-5, .lblmargin-5, hr {
    margin-bottom:5px !important;
  }
  .pgContainer {
min-height: 100% !important;

  }
`;

export default GlobalStyle;
