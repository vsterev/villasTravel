import React from 'react'
import Login from '../../login'
import NavBar from '../../navbar'
import Footer from '../../footer'

const LoginPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <Login />
            </main>
            <br />
            <Footer />
        </React.Fragment>
    )
}
export default LoginPage