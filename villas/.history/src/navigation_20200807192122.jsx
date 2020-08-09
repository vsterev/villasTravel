import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/homePage'
import LoginPage from './components/pages/loginPage'
import RegisterPage from './components/pages/registerPage'
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" render={(props) => <LoginPage {...props} />} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation