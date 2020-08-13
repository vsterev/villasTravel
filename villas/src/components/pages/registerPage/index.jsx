import React from 'react'
import Register from '../../register'
import NavBar from '../../navbar'
import Footer from '../../footer'

const RegisterPage = (props) => {
    return (
        <div>
            <NavBar />
            <br />
            <main>
                <Register />
            </main>
            <br />
            <Footer />
        </div>
    )
}
export default RegisterPage