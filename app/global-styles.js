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
  @media (max-width: 768px){
  .main-container{
      margin-top:10%!important;
  }
  .hide-xs{
    display:none!important;
  }
}
.nav-tabs .nav-link.active {
  border-top: 3px solid #28a745 !important;
  cursor: default;
  border-bottom:none!important;
  color :#28a745 !important;
  font-weight:600!important;
}
.nav-tabs .nav-link{
  border-bottom:1px solid #dee2e6!important;
  color:gray!important;
}
.card-header-tabs{
  border-bottom:1px solid #dee2e6!important;
  color:gray!important;
}
.required {
  color: #E02222 !important;
  font-size: 15px !important;
  padding-left: 2px;
}
.center{
  text-align:center!important;
}
`;

export default GlobalStyle;
