import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
import Card from '../shared/card'
import RenderCards from '../shared/renderCards'
import './style.css'
// import { CardGroup, CardDeck, CardColumns } from 'react-bootstrap'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    useEffect(() => {
        villaService.getVillas()
            .then(data => {
                setVillas(data.villas)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2 className="header">Our best offers ... </h2>
            <div>
                    <RenderCards Component={Card} villas={villas}/>
            </div>
        </div>
    )
}
export default HomeNotAuth