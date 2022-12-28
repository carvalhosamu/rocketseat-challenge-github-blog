import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['dark-blue-800']};
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-bottom: 4.5rem;

  img {
    width: 148px;
    border-radius: 8px;
  }
`
export const ProfileDetails = styled.div`
  flex: 1;
  margin-top: 0.5rem;
  & > span {
    color: ${(props) => props.theme['dark-blue-300']};
    display: inline-block;
    margin-bottom: 1.75rem;
    line-height: 1.6;
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
  justify-content: flex-start;
  svg {
    color: ${(props) => props.theme['dark-blue-500']};
    font-size: 18px;
  }
  span {
    line-height: 1;
    color: ${(props) => props.theme['dark-blue-200']};
  }
`
export const FormContainer = styled.div`
  div {
    margin-bottom: 0.75rem;
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

export const IssueList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`
export const Issue = styled.a`
  text-decoration: none;
  background-color: ${(props) => props.theme['dark-blue-700']};
  display: block;
  padding: 2rem;
  cursor: pointer;
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['dark-blue-100']};
      font-weight: 700;
      line-height: 1.6;
    }

    span {
      font-size: 14px;
      flex: 40%;
      text-align: right;
      color: ${(props) => props.theme['dark-blue-400']};
      margin-top: 5px;
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['dark-blue-300']};
    margin-bottom: 0.5rem;
  }
`
