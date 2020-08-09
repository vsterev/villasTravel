import React, { useState, useEffect } from 'react'
import AuthContext from './context'
import userService from '../services/userService'
import parseCookie from './parseCookie'

const Auth = (props) => {
    const [user, setUser] = useState({ user: null })
    const [loggedIn, setLoggedIn] = useState(null)

    const logIn = (user) => {
        setLoggedIn(true)
        setUser(user)
    }

    const logOut = () => {
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
        setLoggedIn(false)
        setUser({ user: null })
    }

    useEffect(() => {
        const token = parseCookie('x-auth-token')
        if (!token) {
            logOut()
            return
        }
        userService.verify(token)
            .then(res => {
                console.log(res)
                // if (res.status) {
                //     logIn(res.userData)
                //     return
                // }
                logOut()
            })
            .catch(err => console.log(err))
    }, [])

    if (loggedIn === null) {
        return <div>Loading ...</div>
    }
    return (
        <AuthContext.Provider value={{ loggedIn, user, logIn, logOut }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default Auth
