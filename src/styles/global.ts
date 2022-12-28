import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['dark-blue-1000']}
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body, input, textarea button {
    font-family: 'Nunito', sans-serif;
    color: ${(props) => props.theme['dark-blue-200']};
    font-weight: 400;
    line-height: 1.6;
  }

  a {
  text-decoration: none ;
  }

  h3 {
    color: ${(props) => props.theme['dark-blue-100']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 8px;
  }
`
