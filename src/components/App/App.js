import React from 'react'
import './App.scss'

import RenderList from '../RenderList/RenderList'
import Spiner from '../Spinner/Spinner'


const App = () => {
    return (
        <div className="App">
            <h2>Simple / Github Issue Page</h2>
            <RenderList />
        </div>
    )
}

export default App;