import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    const [search, setSearch] = useState('')
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const data = { search, from, to }
    useEffect(() => {
        villaService.getVillasExtended()
            .then(data => {
                setVillas(data.villas)
            })
            .catch(err => console.log(err))
    }, [to])
    const renderVillas = () => {
        return villas.map((villa, id) => {
            return <div key={id}><Link to={`/villa/detail/${villa._id}`}>{villa.name}</Link> - {villa.region}, {villa.date}, {villa.price}, {villa.likes.length}, {!!villa.reservationId ? 'isBooked' : ''} </div>
        })
    }
    const submitHandlerSearch = (e) => {
        e.preventDefault()
        // console.log(data)
    }
    return (
        <div>
            <h2>Home Page</h2>
            {/* {villas} */}
            {to}
            <form onSubmit={submitHandlerSearch}>
                <input type="text" class="search" name="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <input type="number" name="from" class="difficulty" placeholder="Difficulty from..." value={from} onChange={(e) => setFrom(e.target.value)} />
                <span>-</span>
                <input type="number" name="to" class="difficulty" placeholder="Difficulty to..." value={to} onChange={(e) => setTo(e.target.value)} />
                <button type="submit" >Search...</button>
            </form>
            {renderVillas()}
        </div>
    )
}
export default HomeNotAuth