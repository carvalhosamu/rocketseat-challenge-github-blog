import { useMemo, useState } from 'react'
import { useFindIssues } from '../../services/GithubRequests'
import { Issue } from './components/Issue'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { IssueList } from './styles'

export function Home() {
  const [searchText, setSearchText] = useState('')
  const issueResponse = useFindIssues(searchText)

  const issuesCount = issueResponse.data?.total_count
    ? issueResponse.data?.total_count
    : 0

  function handleSearch(filterText: string) {
    setSearchText(filterText)
  }

  // add useMemo to render only in first rendering
  const userProfile = useMemo(() => {
    return <Profile />
  }, [])

  return (
    <>
      {userProfile}
      <SearchForm issuesCount={issuesCount} onSearch={handleSearch} />
      <IssueList>
        {issueResponse.data?.items.map((c) => {
          return <Issue item={c} key={c.id} />
        })}
      </IssueList>
    </>
  )
}
