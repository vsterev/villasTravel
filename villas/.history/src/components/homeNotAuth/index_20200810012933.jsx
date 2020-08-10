import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    useEffect(() => {
        villaService.getVillas()
            .then(data => {
                setVillas(data.villas)
            })
            .catch(err => console.log(err))
    }, [])
    const renderVillas = () => {
        return villas.map((villa, id) => {
        return <div key={id}><Link to={`/villa/detail/${villa._id}`}>{villa.name}</Link> - {villa.region}, {villa.date}, {villa.price}, {villa.likes}, {!!villa.reservationId ? 'isBooked' : ''} </div>
        })
    }
    return (
        <div>
            <h2>Home Page</h2>
            {/* {villas} */}
            {renderVillas()}
        </div>
    )
}
export default HomeNotAuth