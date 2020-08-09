import React, { useContext } from 'react'
import AuthConext from '../../utils/context'
const Profile = () => {
    const { user } = useContext(AuthConext)
    changeName = () => {

    }
    return (
        <div>
            <div>Name: {user.name} <button onClick={changeName}>Change</button></div>
            <div>Email: {user.email}</div>
            <h3>Your Reservation</h3>
        </div>

    )
}
export default Profile
