import React from 'react'
import PasswordChange from '../../passwordChange'
import NavBar from '../../navbar'
import Footer from '../../footer'

const LoginPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <PasswordChange />
            </main>
            <br />
            <Footer />
        </React.Fragment>
    )
}
export default LoginPage