import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { Routing } from '../../Routing/Routing'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <h2>Simple / Github Issue Page</h2>
                    <Routing/>
                </div>
            </Router>
        </Provider>
    )
}

export default App;