import React from 'react'
import Register from '../../register'
import NavBar from '../../navbar'
import Footer from '../../footer'

const RegisterPage = (props) => {
    return (
        <div>
            <NavBar />
            <main>
                <Register />
            </main>
            <Footer />
        </div>
    )
}
export default RegisterPage