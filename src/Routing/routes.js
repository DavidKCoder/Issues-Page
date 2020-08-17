import Issue from '../components/IssuePage/Issue'
import Issues from '../components/Issues/Issues'

const issuesPage = {
    component: Issues,
    path: '/issues'
}
const issuePage = {
    component: Issue,
    path: '/issue/:id'
}
export default [issuePage, issuesPage]
