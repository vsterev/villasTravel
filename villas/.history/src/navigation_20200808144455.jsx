import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/homePage'
import LoginPage from './components/pages/loginPage'
import Logout from './components/logout'
import RegisterPage from './components/pages/registerPage'
import ProfilePage from './components/pages/profilPage'
import PasswordChangePage from './components/pages/passWordChangePage'
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                {/* <Route path="/login" render={(props) => <LoginPage {...props} />} /> */}
                <Route path="/login" component = {LoginPage} />
                <Route path="/logout" component = {Logout} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/password-change" component={PasswordChangePage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation