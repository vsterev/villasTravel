import React from 'react'
const AuthenticationContext = React.createContext({
    loggedIn: false,
    user: null,
    logIn: () => {},
    logOut: () => {}
})
export default AuthenticationContext