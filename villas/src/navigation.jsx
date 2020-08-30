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
import Map from './components/pages/testPage'
// import Map from './components/shared/googleMapGetLocation'
import ErrorPage from './components/pages/errorPage'

import AuthContext from './utils/context'
// import HomeNotAuth from './components/homeNotAuth'
const Navigation = () => {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact render={!loggedIn ? () => <HomePage /> : () => <HomePageAuth />} />
                {/* <Route path="/login" render={(props) => <LoginPage {...props} />} /> */}
                {/* <Route path="/login" render={!loggedIn ? (props) => <LoginPage {...props}/> : (props) => <HomePage {...props}/>} /> */}
                <Route path="/login" render={!loggedIn ? () => <LoginPage /> : () => <HomePageAuth/>} />
                {/* <Route path="/login" component={LoginPage} /> */}
                <Route path="/test" component ={Map} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" render={!loggedIn ? () => <RegisterPage /> : () => <HomePageAuth/>} />
                <Route path="/profile" render={loggedIn ? () => <ProfilePage /> : () => <HomePage/>}/> 
                <Route path="/password-change" render={loggedIn ? () => <PasswordChangePage /> : () => <HomePage/>} />
                <Route path="/add-villa" render={loggedIn ? () => <AddVilaPage /> : () => <LoginPage/>} />
                <Route path="/villa/edit/:id" render={loggedIn ? () => <EditVilaPage /> : () => <LoginPage/>} />
                <Route path="/villa/detail/:id"  render={loggedIn ? () => <DetailsVillaPage /> : () => <LoginPage/>} />
                <Route path="/villa/book/details/:id" render={loggedIn ? () => <DetailsReservationPage /> : () => <LoginPage/>}/>
                <Route path="/villa/book/:id" render={loggedIn ? () => <BookVillaPage /> : () => <LoginPage/>} />
                {/* <Route path="/map" component={Map} /> */}
                <Route path="*" render={()=> <ErrorPage msg="Page not Found - 404"/>} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation