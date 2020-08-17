export const ADD_ISSUE = 'ADD_ISSUE';
export const ADD_LABEL = "issues/ADD_LABEL"

export const addIssue = (issue) => ({ type: ADD_ISSUE, issue })
export const addLabel = (label, issueId) => ({ type: ADD_LABEL, label, issueId })