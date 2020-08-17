import { ADD_ISSUE } from './actions'

const initialState = {
    issues: [
        {
            id: 0,
            text: "How to use eslint-webpack-plugin instead of eslint-loader",
            isOpen: true,
            number: "#1",
            opened: "opened 2 days ago",
            badges: [
                {
                    id: 0,
                    title: "issue: bug report",
                    bgColor: "orange",
                },
                {
                    title: "issue: proposal",
                    bgColor: "#fed330",
                },
            ],
        },
        {
            id: 1,
            text:
                "npx create-react-app myapp not working does not create the react app",
            isOpen: false,
            number: "#2",
            badges: [
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
            ],
        },
        {
            id: 2,
            text: "Install dependencies fails ",
            isOpen: true,
            number: "#3",
            badges: [
                {
                    title: "issue: bug report",
                    bgColor: "orange",
                },
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
            ],
        },
        {
            id: 3,
            text: "Use memo: true flag with SVGR",
            isOpen: true,
            number: "#4",
            badges: [
                {
                    title: "issue: proposal",
                    bgColor: "#fed330",
                },
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
            ],
        },
        {
            id: 4,
            text: "TS Watch mode recompiling stuck",
            isOpen: true,
            number: "#5",
            badges: [
                {
                    title: "issue: bug report",
                    bgColor: "orange",
                },
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
            ],
        },
        {
            id: 5,
            text: "Create react app is now working after done",
            isOpen: false,
            number: "#6",
            opened: "opened 5 days ago",
            badges: [
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
            ],
        },
        {
            id: 5,
            text: "Create react app is now working after done",
            isOpen: true,
            number: "#7",
            badges: [
                {
                    title: "issue: bug report",
                    bgColor: "orange",
                },
                {
                    title: "needs triage",
                    bgColor: "#b71540",
                    color: "white",
                },
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
        default: return state
    }
}

export default issuesReducer