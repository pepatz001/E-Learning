import React from 'react'
import { Switch, Route, Redirect , history } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'
import AdminPage from './pages/AdminPage'
import Crpdaz from './pages/Crpdaz'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            {!localStorage.getItem('username') ? (
            <Redirect to="/login" />
            ) : (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/Crpdaz" component={Crpdaz} />
                {localStorage.getItem('department') !== 'admin' ? (
                <Redirect to="/Crpdaz" />
                ) : (
                <Switch>
                    <Route exact path="/admin" component={AdminPage} />
                </Switch>
                )}
            </Switch>
            )}
        </Switch>
    )
}

export default Routes