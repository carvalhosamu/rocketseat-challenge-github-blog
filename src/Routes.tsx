import { Route, Routes } from 'react-router-dom'
import { DefaultLayot } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { IssueDetail } from './pages/IssueDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayot />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue-detail/:issueNumber" element={<IssueDetail />} />
      </Route>
    </Routes>
  )
}
