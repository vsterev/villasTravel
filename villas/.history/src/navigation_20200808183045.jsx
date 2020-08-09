import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/homePage'
import LoginPage from './components/pages/loginPage'
import Logout from './components/logout'
import RegisterPage from './components/pages/registerPage'
import ProfilePage from './components/pages/profilPage'
import PasswordChangePage from './components/pages/passWordChangePage'
import EditVilaPage from './components/pages/editVillaPage'
import AddVilaPage from './components/pages/addVillaPage'
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
                <Route path="/add-villa" component={AddVilaPage} />
                <Route path="/villa/:id" component={EditVilaPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation