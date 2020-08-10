import React, { useState, useEffect } from 'react'
import './App.scss'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { getIssues } from '../api/api'
// import Issue from './Issues/Issue'
import Issues from '../Issues/issues'
import Spiner from './Spiner/Spiner'
import Pagination from './Pagination/Pagination'


const App = () => {
    const [issues, setIssues] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(false)
    const [issuesPerPage] = useState(10)

    useEffect(() => {
        setLoading(false)
        getIssues().then(res => {
            setIssues(res)
            setLoading(false)
        });
    }, []);

    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssues = indexOfLastIssue - issuesPerPage;
    const currentIssues = issues.slice(indexOfFirstIssues, indexOfLastIssue);

    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (isLoading) {
        return <Spiner />
    }
    return (
        <div className="App">
            <Router basename='/'>
                <Switch>
                    <Route exact path='/'>
                        <h1>GitHub Issues Page</h1>
                        <Issues issues={currentIssues} />
                        <Pagination
                            issuesPerPage={issuesPerPage}
                            totalIssues={issues.length}
                            paginate={paginate}
                            currentPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;