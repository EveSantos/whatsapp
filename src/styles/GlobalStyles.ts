import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #202c33;
        --secondary: #111b21;
        --tertiary: #aebac1;
        --quaternary: #d1d7db;
        --quinary: #393d42;
        --senary: #828386;
     
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
     
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
     
        --link: #5d80d6;
     
        --blue: #5d80d6;
      }
`; 