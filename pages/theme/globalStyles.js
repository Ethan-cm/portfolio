
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Image from 'next/image';

 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background: slategrey;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  };
  head{
    margin: 0px;
    padding: 0px;
  };
`;
 
export default GlobalStyle;

