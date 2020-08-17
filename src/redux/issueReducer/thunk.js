import { setIssue } from "./actions"

export const getIssue = (id) => (dispatch, getState) => {

    const issues = getState().issues.issues
    const issue = issues.filter(issue => {

        if (issue.id === parseInt(id, 10)) {
            return issue
        }
        return null
    })
    if (issue) {
        dispatch(setIssue(issue[0]))
    }
}