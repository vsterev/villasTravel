import React from 'react'
import Profile from '../../profile'
import NavBar from '../../navbar'

const ProfilePage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <h2>Profile page</h2>
            <Profile />
        </React.Fragment>

    )
}
export default ProfilePage