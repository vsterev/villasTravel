import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    const [search, setSearch] = useState('')
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    useEffect(() => {
        villaService.getVillas()
            .then(data => {
                setVillas(data.villas)
            })
            .catch(err => console.log(err))
    }, [])
    const renderVillas = () => {
        return villas.map((villa, id) => {
            return <div key={id}><Link to={`/villa/detail/${villa._id}`}>{villa.name}</Link> - {villa.region}, {villa.date}, {villa.price}, {villa.likes.length}, {!!villa.reservationId ? 'isBooked' : ''} </div>
        })
    }
    return (
        <div>
            <h2>Home Page</h2>
            {/* {villas} */}
            <form>
                <input type="text" class="search" name="search" placeholder="Search..." value={search} />
                <input type="number" name="from" class="difficulty" placeholder="Difficulty from..." value={from} />
                <span>-</span>
                <input type="number" name="to" class="difficulty" placeholder="Difficulty to..." value={to} />
                <button type="submit" >Search...</button>
            </form>
            {renderVillas()}
        </div>
    )
}
export default HomeNotAuth