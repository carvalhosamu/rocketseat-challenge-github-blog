import styled from 'styled-components'
import backgroundImage from '../../assets/Cover.png'

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme['dark-blue-900']};
  min-height: 100vh;
`

export const Header = styled.header`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-position: top;
  width: 100%;
  height: 296px;
`
export const ContentContainer = styled.div`
  padding: 0 2rem;
  max-width: calc(864px + 4rem);
  width: 100%;
  margin: 0 auto;
  margin-top: -5.5rem;
`
