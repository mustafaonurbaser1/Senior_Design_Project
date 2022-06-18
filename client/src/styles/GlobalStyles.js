import { createGlobalStyle } from "styled-components";


export const GlobalStyle  = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&family=Raleway:wght@800&display=swap');
*,*::before, *::after {
    margin: 0;
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.bg2};
    color: ${({theme}) => theme.text};
    font-family: 'Roboto',sans-serif;
    letter-spacing: .6px;
}    
`
