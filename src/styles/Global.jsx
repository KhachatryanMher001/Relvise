import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }


    a {
        text-decoration: none;
    }
 
    ul,
    ol,
    li {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    p {
        margin: 0;
    } 

    img {
        vertical-align: top;
    }

    html,
    body {
        height: 100%;
        line-height: 1;
        color: #252B42;
        font-weight: 500;
        font-family: Montserrat;
        background: #fafafa;
        position: relative;
        margin: 0;
        padding: 0;
        @media screen and (max-width: 420px) {
           font-size: 12px; 
        }
    }
`;

export default GlobalStyle;
