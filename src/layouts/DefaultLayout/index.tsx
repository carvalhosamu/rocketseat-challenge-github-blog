import { Outlet } from 'react-router-dom'
import { Container, ContentContainer, Header } from './styles'

export function DefaultLayot() {
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  )
}
