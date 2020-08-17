import { SET_ISSUE } from "./actions"

const initialState = {
    issue: {}
}
const issueReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_ISSUE:
            return {
                ...state,
                issue: actions.issue
            }
        default: return state
    }
}

export default issueReducer
