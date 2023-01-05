import { FooterItem, ProfileContainer, ProfileDetails } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useFindUser } from '../../../../services/GithubRequests'

export function Profile() {
  const userResponse = useFindUser()
  return (
    <ProfileContainer>
      <img src={userResponse.data?.avatar_url} alt="" />
      <ProfileDetails>
        <h3>{userResponse.data?.name}</h3>
        <span>{userResponse.data?.bio}</span>
        <footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userResponse.data?.login}</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userResponse.data?.company}</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userResponse.data?.followers} Seguidores</span>
          </FooterItem>
        </footer>
      </ProfileDetails>
      <a href={userResponse.data?.html_url}>
        github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </ProfileContainer>
  )
}
