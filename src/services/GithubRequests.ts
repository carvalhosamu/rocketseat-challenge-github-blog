import { useQuery, UseQueryResult } from 'react-query'
import { api } from '../constants/api'
import { githubData } from '../constants/github'
import { IssueDetail } from '../models/IssueDetail'
import { Issue } from '../models/Issues'
import { User } from '../models/User'

type useFindUserType = () => UseQueryResult<User>
type useFindIssuesType = (searchQuery: string) => UseQueryResult<Issue>
type useFindIssueDetailType = (
  issueNumber: number,
) => UseQueryResult<IssueDetail>

export const useFindUser: useFindUserType = () => {
  return useQuery(['user', githubData.username], async () => {
    const { data } = await api.get<User>(`users/${githubData.username}`)
    return data
  })
}

export const useFindIssues: useFindIssuesType = (searchQuery: string) => {
  return useQuery(['issue', searchQuery], async () => {
    const { data } = await api.get<Issue>(`search/issues`, {
      params: {
        q: `${searchQuery}repo:${githubData.username}/${githubData.repoName}`,
      },
    })
    return data
  })
}

export const useFindIssueDetail: useFindIssueDetailType = (
  issueNumber: number,
) => {
  return useQuery(['issueDetail', issueNumber], async () => {
    const { data } = await api.get<IssueDetail>(
      `repos/${githubData.username}/${githubData.repoName}/issues/${issueNumber}`,
    )
    return data
  })
}
