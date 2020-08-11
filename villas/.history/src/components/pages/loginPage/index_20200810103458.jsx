import React from 'react'
import Login from '../../login'
import NavBar from '../../navbar'

const LoginPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                <Login />
            </main>
        </React.Fragment>

    )
}
export default LoginPage