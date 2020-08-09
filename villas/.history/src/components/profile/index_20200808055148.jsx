import React, { useContext } from 'react'
import AuthConext from '../../utils/context'
const Profile = () => {
    const { user } = useContext(AuthConext)
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
