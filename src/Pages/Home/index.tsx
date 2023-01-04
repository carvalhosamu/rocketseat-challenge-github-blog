import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../contexts/GithubContext'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { IssueList, Issue } from './styles'

export function Home() {
  const [issue, onSearchIssue] = useContextSelector(
    GithubContext,
    (context) => {
      return [context.issue, context.onSearchIssues]
    },
  )

  function handleSearch(filterText: string) {
    onSearchIssue(filterText)
  }

  useEffect(() => {
    if (issue) {
      console.log(issue)
    }
  }, [issue])

  return (
    <>
      <Profile />
      <SearchForm onSearch={handleSearch} />
      <IssueList>
        {issue?.items.map((c) => {
          return (
            <Issue key={c.id}>
              <header>
                <strong>{c.title}</strong>
                <span>Há 1 dia</span>
              </header>
              <p>{c.body}</p>
            </Issue>
          )
        })}
      </IssueList>
    </>
  )
}
