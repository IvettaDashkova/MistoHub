import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Oddval";
  src: local('Oddval SemiBold'), local('Oddval-SemiBold'),
    url("/src/assets/fonts/Oddval-SemiBold.woff2") format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "FixelDisplay";
  src: local('FixelDisplay Medium'), local('FixelDisplay-Medium'),
    url("/src/assets/fonts/FixelDisplay-Medium.ttf") format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "FixelDisplay";
  src: local('FixelDisplay SemiBold'), local('FixelDisplay-SemiBold'),
    url("/src/assets/fonts/FixelDisplay-SemiBold.ttf") format('truetype');
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
