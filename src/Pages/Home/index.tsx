import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  FooterItem,
  FormContainer,
  ProfileContainer,
  ProfileDetails,
  IssueList,
  Issue,
} from './styles'

export function Home() {
  return (
    <>
      <ProfileContainer>
        <img src="https://github.com/samuel96carvalho.png" alt="" />
        <ProfileDetails>
          <h3>Samuel Carvalho</h3>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
          <footer>
            <FooterItem>
              <FontAwesomeIcon icon={faGithub} />
              <span>samuel96carvalho</span>
            </FooterItem>
            <FooterItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Invillia</span>
            </FooterItem>
            <FooterItem>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 Seguidores</span>
            </FooterItem>
          </footer>
        </ProfileDetails>
      </ProfileContainer>
      <FormContainer>
        <div>
          <label htmlFor="">Publicações</label>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
      <IssueList>
        <Issue>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = &apos;bar&apos;;// foo is now a string foo = true; //
            foo is now a boolean
          </p>
        </Issue>
        <Issue>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = &apos;bar&apos;;// foo is now a string foo = true; //
            foo is now a boolean
          </p>
        </Issue>
        <Issue>
          <header>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </header>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo = &apos;bar&apos;;// foo is now a string foo = true; //
            foo is now a boolean
          </p>
        </Issue>
      </IssueList>
    </>
  )
}
