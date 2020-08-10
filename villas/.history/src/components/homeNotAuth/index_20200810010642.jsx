import React, { useState, useEffect } from 'react'
import villaService from '../../services/villaService'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    useEffect(() => {
        villaService.getVillas()
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
}
export default HomeNotAuth