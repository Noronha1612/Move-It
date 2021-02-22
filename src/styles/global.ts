import { createGlobalStyle } from 'styled-components';

export const variables = {
    white: '#fff',
    background: '#f2f3f5',
    grayLine: '#dcdde0',
    text: '#666666',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0'
}

export const GlobalStyle = createGlobalStyle`
    @media ( max-width: 1080px ) {
        html {
            font-size: 93.75%;
        }
    }
    @media ( max-width: 720px ) {
        html {
            font-size: 87.5%;
        }
    }

    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background: ${ variables.background };
        color: ${ variables.text };
    }

    body, input, text-area, button {
        font: 400 1rem;
    }

    button, a {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`