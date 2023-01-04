import { ReactNode, useEffect, useState } from 'react'
import { User } from '../models/User'
import { createContext } from 'use-context-selector'
import { useFindIssues, useFindUser } from '../services/GithubRequests'
import { Issue } from '../models/Issues'

interface GithubProps {
  children: ReactNode
}

interface GithubContextType {
  user: User | undefined
  issue: Issue | undefined
  onSearchIssues: (value: string) => void
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProps) {
  const [user, setUser] = useState<User | undefined>()
  const [searchIssueText, setSearchIssueText] = useState('')
  const [issue, setIssue] = useState<Issue | undefined>()

  const userResponse = useFindUser()
  const issueResponse = useFindIssues(searchIssueText)

  useEffect(() => {
    setUser(userResponse.data)
  }, [userResponse])

  useEffect(() => {
    setIssue(issueResponse.data)
  }, [issueResponse])

  function onSearchIssues(value: string) {
    setSearchIssueText(value)
  }

  return (
    <GithubContext.Provider value={{ user, issue, onSearchIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
