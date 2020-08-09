import React, { useContext } from 'react'
import AuthConext from '../../utils/context'
const Profile = () => {
    const { user } = useContext(AuthConext)
    return (
        <div>
            <div>Name: {user.name} <button>Change</button>/div>
            <div>Email: {user.email}</div>
        </div>
    )
}
export default Profile
