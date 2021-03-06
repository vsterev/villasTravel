import React, { useContext, useState, useEffect } from 'react'
import AuthConext from '../../utils/context'
import reservationService from '../../services/reservationService'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
const Profile = () => {
    const [villas, setVillas] = useState([])
    const [reservations, setReservations] = useState([])
    const { user } = useContext(AuthConext)

    useEffect(() => {
        const token = parseCookie('x-auth-token')

        villaService.getVillasFromUser(token)
            .then(data => {
                if (!!data.status) {
                    return data.villas
                }
            })
            .then(villasUser => setVillas(villasUser))
            .catch(err => console.log(err))

        // reservationService.getReservationsFromUser(token)
        //     .then(reservationsUser => {
        //         if (!!reservationsUser.status) {
        //             setReservations(reservationsUser)
        //         }
        //     })
        //     .catch(err => console.log(err))

    }, [])
    const changeName = () => {

    }
    return (
        <div>
            <div id="headprofile">
                <div>Name: {user.name} </div>
                <div>Email: {user.email}</div>
                <div><button>Password change</button></div>
                <div><button>Name change</button></div>
            </div>
            <div id="villasinfo">
                {villas.length !== 0 && <h3>Your own villas in the system</h3>}
                {villas.length !== 0 && villas.map((villa, id) => {
                    return <div key={villa._id}>{villa.name}: <button>more info</button></div>
                })}
                {villas.length === 0 && <h3> You don't have added your own villas!</h3>}
            </div>
            <div id="reservationsinfo">
                {reservations.length !== 0 && <h3>Your booked holidays in the system</h3>}
                {reservations.length !== 0 && reservations.map((reservation, id) => {
                    return <div key={reservation._id}>villa name: {reservation.villaId.name}: <button>more info</button></div>
                })}
                {reservations.length === 0 && <h3> You don't have any bookings in the system!</h3>}
            </div>
        </div>

    )
}
export default Profile
