import { ADD_LABEL } from './actions';

const initialState = {
    labels: [
        { id: 1, title: 'issue: bug report', bgColor: '#ffa500' },
        { id: 2, title: 'tag: new feature', bgColor: '#008000' },
        { id: 3, title: 'issue: question', bgColor: '#20b2aa' },
        { id: 4, title: 'issue: proposal', bgColor: '#fed330' },
        { id: 5, title: 'needs triage', bgColor: '#b71540' },
    ]
}

const labelsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LABEL:
            return {
                ...state,
                labels: [...state.labels, action.label]
            }
        default:
            return state;
    }
}

export default labelsReducers
