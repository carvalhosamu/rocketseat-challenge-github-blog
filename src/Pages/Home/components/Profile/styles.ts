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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
