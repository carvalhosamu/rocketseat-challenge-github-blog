import styled from 'styled-components'

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
