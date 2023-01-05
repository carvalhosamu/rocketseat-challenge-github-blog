import { Markdown, FooterItem, TitleBox } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { NavLink, useParams } from 'react-router-dom'

import pluralize from 'pluralize'

import { useFindIssueDetail } from '../../services/GithubRequests'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { format, formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function IssueDetail() {
  const params = useParams()
  const issueNumber = parseInt(params.issueNumber as string)
  const { data } = useFindIssueDetail(issueNumber)
  const createdAt = data?.created_at ? new Date(data?.created_at) : undefined

  return (
    <>
      <TitleBox>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </NavLink>
          <div>
            <a href={data?.html_url}>
              ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </header>
        <h2>{data?.title}</h2>
        <footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{data?.user.login}</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            {createdAt && (
              <time
                title={format(createdAt, 'dd/MM/yyyy HH:mm:ss')}
                dateTime={createdAt.toISOString()}
              >
                {formatDistanceToNowStrict(createdAt, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </time>
            )}
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {data?.comments} {pluralize('Comentário', data?.comments)}
            </span>
          </FooterItem>
        </footer>
      </TitleBox>
      <Markdown
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={theme}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {data?.body!}
      </Markdown>
    </>
  )
}
