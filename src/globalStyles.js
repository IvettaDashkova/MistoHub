import { createGlobalStyle } from 'styled-components';

import fontOddvalSemiBold from '../src/assets/fonts/Oddval-SemiBold.woff2';
import fontFixelMedium from '../src/assets/fonts/FixelDisplay-Medium.ttf';
import fontFixelSemiBold from '../src/assets/fonts/FixelDisplay-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Oddval";
  src: local('Oddval SemiBold'), local('Oddval-SemiBold'),
    url(${fontOddvalSemiBold}) format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "FixelDisplay";
  src: local('FixelDisplay Medium'), local('FixelDisplay-Medium'),
    url(${fontFixelMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "FixelDisplay";
  src: local('FixelDisplay SemiBold'), local('FixelDisplay-SemiBold'),
    url(${fontFixelSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  font-family: "FixelDisplay";
  font-weight: 500;
  font-style: normal;
  color:#000;
  width: 100%;
  height: 100%;
  margin: 0;
}
.modal-open {
  overflow: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
 margin: 0;
}

a {
 text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
    
img {
  display: block;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
