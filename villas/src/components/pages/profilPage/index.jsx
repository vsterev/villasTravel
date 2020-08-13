import React from 'react'
import Profile from '../../profile'
import NavBar from '../../navbar'
import Footer from '../../footer'

const ProfilePage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <Profile />
            </main>
            <br />
            <Footer />
        </React.Fragment>
    )
}
export default ProfilePage