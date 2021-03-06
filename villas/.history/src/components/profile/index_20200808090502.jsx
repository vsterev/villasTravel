import React, { useContext, useState, useEffect } from 'react'
import villaService from '../../services/villaService'
import AuthConext from '../../utils/context'
import parseCookie from '../../utils/parseCookie'
const Profile = () => {
    const [reservation, setReservation] = useState([])
    const { user } = useContext(AuthConext)

    useEffect(() => {
        const token = parseCookie('x-auth-token')
        villaService.getVillasFromUser(token)
        .then(data=>console.log('Data',data))
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
