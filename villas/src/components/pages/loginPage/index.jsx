import React from 'react'
import Login from '../../login'
import NavBar from '../../navbar'
import Footer from '../../footer'

const LoginPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                <Login />
            </main>
            <Footer />
        </React.Fragment>
    )
}
export default LoginPage