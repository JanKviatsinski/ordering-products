import {createGlobalStyle} from 'styled-components';

export const theme = {
    colors: {
        fontColor1: 'rgb(221, 221, 221)',
        fontColor2: 'rgb(0, 0, 0)'
    },
    radii: {
        radius0: '0'
    },
    paddings: {
        padding1: '4px',
        padding2: '8px'
    }
}

export const GlobalStyle = createGlobalStyle`
  body {
      background: #1a581a;
      text-align: center;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`
