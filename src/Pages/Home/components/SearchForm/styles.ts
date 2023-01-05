import styled from 'styled-components'

export const FormContainer = styled.div`
  div {
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props) => props.theme['dark-blue-400']};
      font-size: 0.875rem;
    }
  }

  label {
    display: block;
    color: ${(props) => props.theme['dark-blue-200']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6;
  }

  input {
    width: 100%;
    background-color: ${(props) => props.theme['dark-blue-1000']};
    border: 1px solid ${(props) => props.theme['dark-blue-600']};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['dark-blue-300']};
    border-radius: 6px;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['dark-blue-500']};
    }

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['blue-500']};
    }
  }
`
