import { ADD_ISSUE, ADD_LABEL } from './actions'

const initialState = {
    issues: [
        {
            id: 0,
            text: "How to use eslint-webpack-plugin instead of eslint-loader",
            description: "In a responsive table, with lots of columns, it's often desirable to make the left-most column sticky, so it doesn't scroll off the page. I think this should be an option within bootstrap, in the same way that we can make the sticky. Sometimes, both the top row and left-col need to be sticky.",
            isOpen: true,
            number: "#1",
            opened: "opened 2 days ago",
            badges: [
                { id: 1, title: 'issue: bug report', bgColor: '#ffa500' },
            ],
        },
        {
            id: 1,
            text:
                "npx create-react-app myapp not working does not create the react app",
            isOpen: false,
            number: "#2",
            badges: [
                { id: 2, title: 'tag: new feature', bgColor: '#008000', color: '#fff' },
            ],
        },
        {
            id: 2,
            text: "Install dependencies fails ",
            isOpen: true,
            number: "#3",
            badges: [
                { id: 3, title: 'issue: question', bgColor: '#20b2aa' },

            ],
        },
        {
            id: 3,
            text: "Use memo: true flag with SVGR",
            isOpen: true,
            number: "#4",
            badges: [
                { id: 4, title: 'issue: proposal', bgColor: '#fed330' },

            ],
        },
        {
            id: 4,
            text: "TS Watch mode recompiling stuck",
            description: "In a responsive table, with lots of columns, it's often desirable to make the left-most column sticky, so it doesn't scroll off the page. I think this should be an option within bootstrap, in the same way that we can make the sticky. Sometimes, both the top row and left-col need to be sticky.",
            isOpen: true,
            number: "#5",
            opened: "opened 5 days ago",
            badges: [
                { id: 5, title: 'needs triage', bgColor: '#b71540', color: '#fff' },

            ],
        },
        {
            id: 5,
            text: "Create react app is now working after done",
            isOpen: false,
            number: "#6",
            badges: [
                { id: 5, title: 'needs triage', bgColor: '#b71540', color: '#fff' },

            ],
        },
    ]
}

const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return {
                ...state,
                issues: [...state.issues, action.issue]
            }
        case ADD_LABEL:
            return {
                ...state,
                issues: state.issues.map(issue => {
                    if (issue.id === action.issueId) {
                        return {
                            ...issue,
                            badges: [...issue.badges, action.label]
                        }
                    }
                    return issue
                })
            }
        default: return state
    }
}



export default issuesReducer