import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Markdown = styled(ReactMarkdown)`
  margin: 0 2rem auto;
  p {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['dark-blue-300']};
  }

  a {
    display: block;
    color: ${(props) => props.theme['blue-500']};
    text-decoration: underline;
  }

  pre > div {
    background-color: ${(props) => props.theme['dark-blue-700']} !important;
    border-radius: 4px;
    font-size: 16px;
    code {
      font-family: 'Fira Code', monospace !important;
      line-height: 1.6 !important;
    }
  }
`
