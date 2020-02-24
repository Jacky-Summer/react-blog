import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'

function Main() {
    return (
        <div>
            <Router>
                <Route path='/' exact component={Login}></Route>
                <Route path='/index' exact component={AdminIndex}></Route>
            </Router>
        </div>
    )
}

export default Main