import { ADD_LABEL } from './actions';

const initialState = {
    labels: [
        { id: 1, title: 'issue: bug report', color: '#ffa500' },
        { id: 2, title: 'tag: new feature', color: '#008000' },
        { id: 3, title: 'issue: question', color: '#20b2aa' },
        { id: 4, title: 'issue: proposal', color: '#fed330' },
        { id: 5, title: 'needs triage', color: '#b71540' },
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
