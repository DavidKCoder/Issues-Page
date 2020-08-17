import issuesReducer from "./issuesReducer/reducer";
import issueReducer from "./issueReducer/reducer";
import thunk from "redux-thunk";
import labelsReducers from "./labelsReducer/reducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducer = combineReducers({
    issues: issuesReducer,
    issue: issueReducer,
    labels: labelsReducers
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store