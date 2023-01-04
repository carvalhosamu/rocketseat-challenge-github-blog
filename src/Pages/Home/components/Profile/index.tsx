import { FooterItem, ProfileContainer, ProfileDetails } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../../../contexts/GithubContext'

export function Profile() {
  const user = useContextSelector(GithubContext, (context) => {
    return context.user
  })

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ProfileDetails>
        <h3>{user?.name}</h3>
        <span>{user?.bio}</span>
        <footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login}</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user?.company}</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} Seguidores</span>
          </FooterItem>
        </footer>
      </ProfileDetails>
    </ProfileContainer>
  )
}
