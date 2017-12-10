import React from 'react'
import { Switch, Route, Redirect , history } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'
import AdminPage from './pages/AdminPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            {!localStorage.getItem('username') ? (
            <Redirect to="/login" />
            ) : (
            <Switch>
                <Route exact path="/" component={Main} />
                {localStorage.getItem('department') !== 'admin' ? (
                <Redirect to="/" />
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