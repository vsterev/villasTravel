import React, { useContext, useState, useEffect } from 'react'
import villaService from '../../services/villaService'
import AuthConext from '../../utils/context'
const Profile = () => {
    const [reservation, setReservation] = useState([])
    const { user } = useContext(AuthConext)
    useEffect(() => {
        villaService.getVillasFromUser
        .then(res=>console.log(res))
    }, [])
    const changeName = () => {

    }
    return (
        <div>
            <div>Name: {user.name} </div>
            <div>Email: {user.email}</div>

            <h3>Your Reservation</h3>
        </div>

    )
}
export default Profile
