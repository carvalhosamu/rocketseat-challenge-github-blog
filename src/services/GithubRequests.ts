import { useQuery, UseQueryResult } from 'react-query'
import { api } from '../constants/api'
import { githubData } from '../constants/github'
import { Issue } from '../models/Issues'
import { User } from '../models/User'

type useFindUserType = () => UseQueryResult<User>
type useFindIssuesType = (searchQuery: string) => UseQueryResult<Issue>

export const useFindUser: useFindUserType = () => {
  return useQuery(['user', githubData.username], async () => {
    const { data } = await api.get<User>(`users/${githubData.username}`)
    return data
  })
}

export const useFindIssues: useFindIssuesType = (searchQuery: string) => {
  return useQuery(['issue', searchQuery], async () => {
    const { data } = await api.get<Issue>(
      `search/issues?q=${searchQuery}repo:${githubData.username}/${githubData.repoName}`,
    )
    return data
  })
}
