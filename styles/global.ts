import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-align: center;
    }

    body {
        font-family: 'Poppins';
        background: #E5E5E5;
    }
`