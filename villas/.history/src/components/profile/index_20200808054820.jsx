import React, { useContext } from 'react'
import AuthConext from '../../utils/context'
const { user } = useContext(AuthConext)
const Profile = () => {
    return (
        <div>
            <div>Name</div>
            <div>{user.name}</div>
            <div>Email</div>
            <div>{user.email}</div>
        </div>
    )
}
export default Profile
