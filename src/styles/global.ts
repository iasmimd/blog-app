import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
    }

    :root{
        --white: #f5f5f5;
        --vanilla: #f1ede0;
        --black: #0c0d0d;
        --dark-blue:  #4682B4;
        --light-blue: #B0C4DE;
    }

    body{
        background-color: var(--vanilla);
        color: var(--black);
    }

    body, input, button{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    h1 , h2 , h3 , h4{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }
`