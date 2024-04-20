import { createGlobalStyle } from "styled-components";
// import RobotoBold from "./fonts/Roboto-Bold.ttf";
 // @font-face {
    //     font-family: 'RobotoBold';
    //     font-weight: 400;
    //     font-style: normal;
    //     src: url(${RobotoBold}) format('truetype'),
    // }

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fff;
        font-family: 'RobotoBold';
        font-weight: 400;
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
