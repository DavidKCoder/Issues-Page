import Issue from '../components/Issue/IssuePage/IssuePage'
import Issues from '../components/Issue/IssueList/IssuesList'

const issuesPage = {
    component: Issues,
    path: '/issues'
}
const issuePage = {
    component: Issue,
    path: '/issue/:id'
}
export default [issuePage, issuesPage]
