import { setIssue } from "./actions"

export const getIssue = (id) => (dispatch, getState) => {
    const issues = getState().issues.issues
    const issue = issues.filter(issue => {
        if (issue.id == id) {
            return issue
        }
        return null
    })
    if(issue){
        dispatch(setIssue(issue[0]))
    }
}