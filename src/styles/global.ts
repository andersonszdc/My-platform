import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    input {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        :focus {
           outline: none;
        }
    }

    button {
        font-family: inherit;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-align: center;
    }

    body {
        font-family: 'Poppins';
        background: #EFEDEE;
    }
`;
