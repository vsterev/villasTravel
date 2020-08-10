import React, { useState, useEffect } from 'react'
import villaService from '../../services/villaService'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    useEffect(() => {
        villaService.getVillas()
            .then(data => {
                setVillas(data.villas)
                console.log(data.villas)
            })
            .catch(err => console.log(err))
    }, [])
    const renderVillas = () => {
       return villas.map((villa, id) => {
            <div key={id}>{villa.name}, {villa.date}, {villa.price}</div>
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