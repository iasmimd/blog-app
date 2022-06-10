import { createGlobalStyle } from 'styled-components';

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
        --yellow: #FFDB58;
        --dark-yellow: #DBAC00;
        --red: #c35030;
    }

    body{
        width: 100%;
        height: 100%;
    }

    #root{
        width: 100%;
        height: 100%;
    }

    body, input, button{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 


    h1 , h2 , h3 , h4{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    button, svg{
        cursor: pointer;
        border-style: none;
    }

    svg{
        width: 18px;
        height: 18px;
    }
    
    a{
        text-decoration: none;
        color: var(--dark-blue)
    }
`;
