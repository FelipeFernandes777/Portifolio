import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  body::-webkit-scrollbar{
    width: 14px;
  }
  body::-webkit-scrollbar-track {
  background: #F0EEB9!important;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #1A190A;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 1px solid #F0EEB9;  /* creates padding around scroll thumb */
}
`
export {
  GlobalStyle
};
