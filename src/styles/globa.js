import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #2A7AE4;
        --white: #fff;

        --color-infra: #9CD33B;
        --color-data-science: #9CD33B;
        --color-backend: #69953B;
        --color-frontend: #6BD1FF;
        --color-mobile: #FFBA05;
        --color-innovation: #FF8C2A;
        --color-marketing: #6B5BE2;
        --color-ux: #DC6EBE;
    
        --color-black-dark: #000000E5;
        --color-black-medium: #00000099;
        --color-black-light: #00000080;
        --color-black-lighter: #9E9E9E;
        
        --color-gray-dark: #53585D;
        --color-gray-medium: #E5E5E5;
        --color-gray-light:#F5F5F5;
    
        --color-error-dark: #C62828;
        --color-error-medium: #E53935;
        --color-error-light:#FCE7E7;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* Scrollbar - Firefox */
        scrollbar-width: thin;
        scrollbar-color: var(--primary) transparent;
    }

    /* Scrollbar - Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 0.5rem;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--primary);

        border-radius: 0.6rem;
        border: 0 none ;
    }
    body{
        font-family: 'Roboto', sans-serif;

        overflow-x:hidden ;
        scroll-behavior: smooth;
        
        background-color: var(--color-black-dark);
    }

    button{
        cursor: pointer;
    }

    img{
        max-width: 100%;
    }

    h1, h2, h3 {
        font-weight: 400;
        color: var(--color-black-dark);
    }

    p {
        font-weight: 300;
    }

    

`;
export default GlobalStyle;
