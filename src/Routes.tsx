import { Route, Routes } from 'react-router-dom'
import { DefaultLayot } from './layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { IssueDetail } from './Pages/IssueDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayot />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue-detail" element={<IssueDetail />} />
      </Route>
    </Routes>
  )
}
