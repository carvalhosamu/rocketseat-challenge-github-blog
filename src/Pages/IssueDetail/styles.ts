import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const TitleBox = styled.div`
  background-color: ${(props) => props.theme['dark-blue-800']};
  padding: 2rem 2rem 2rem 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-bottom: 2.5rem;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.25rem;
  }

  a {
    display: flex;
    align-items: center;
    line-height: 1;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue-500']};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['dark-blue-100']};
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;
  }
`
export const FooterItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc((1rem * 0.6) / 2) 0;
  justify-content: flex-start;
  svg {
    color: ${(props) => props.theme['dark-blue-500']};
    font-size: 18px;
  }
  span {
    line-height: 1;
    color: ${(props) => props.theme['dark-blue-500']};
  }
`

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
