import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/homePage'
import HomePageAuth from './components/pages/homePageAuth'
import LoginPage from './components/pages/loginPage'
import Logout from './components/logout'
import RegisterPage from './components/pages/registerPage'
import ProfilePage from './components/pages/profilPage'
import PasswordChangePage from './components/pages/passWordChangePage'
import EditVilaPage from './components/pages/editVillaPage'
import AddVilaPage from './components/pages/addVillaPage'
import DetailsVillaPage from './components/pages/detailsVillaPage'
import BookVillaPage from './components/pages/bookVillaPage'
import DetailsReservationPage from './components/pages/detailsReservationPage'
import AuthContext from './utils/context'
const Navigation = () => {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={!loggedIn ? () => <HomePage /> : () => <HomePageAuth />} />
                {/* <Route path="/login" render={(props) => <LoginPage {...props} />} /> */}
                {/* <Route path="/login" render={!loggedIn ? (props) => <LoginPage {...props}/> : (props) => <HomePage {...props}/>} /> */}
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/password-change" component={PasswordChangePage} />
                <Route path="/add-villa" component={AddVilaPage} />
                <Route path="/villa/edit/:id" component={EditVilaPage} />
                <Route path="/villa/detail/:id" component={DetailsVillaPage} />
                <Route path="/villa/book/details/:id" component={DetailsReservationPage} />
                <Route path="/villa/book/:id" component={BookVillaPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation