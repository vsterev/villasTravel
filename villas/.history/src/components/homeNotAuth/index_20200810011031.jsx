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
    return (
        <div>
            <h2>Home Page</h2>
            {/* {villas} */}
        </div>
    )
}
export default HomeNotAuth