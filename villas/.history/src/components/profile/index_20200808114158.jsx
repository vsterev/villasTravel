import React, { useContext, useState, useEffect } from 'react'
import villaService from '../../services/villaService'
import AuthConext from '../../utils/context'
import parseCookie from '../../utils/parseCookie'
const Profile = () => {
    const [villas, setVillas] = useState([])
    const { user } = useContext(AuthConext)

    useEffect(() => {
        const token = parseCookie('x-auth-token')
        // console.log(token)
        villaService.getVillasFromUser(token)
            .then(data => {
                if (data.status) {
                    return data.villas
                }
            })
            .then(villasUser => setVillas(villasUser))
    }, [])
    const changeName = () => {

    }
    return (
        <div>
            <div>Name: {user.name} </div>
            <div>Email: {user.email}</div>


            {villas.length !== 0 && <h3>Your own villas in the system</h3>}
            {villas.length !== 0&& villas.map((villa, id) => {
                return <div key={villa._id}>{villa.name}: <button>Edit property</button></div>
            })}
            {villas.length === 0 && <h3> You don't have added your own villas!</h3>}
        </div>

    )
}
export default Profile
