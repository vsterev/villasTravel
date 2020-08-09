import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
    <ul>
        <li><Link to="/login">Login |</Link></li>
        <li><Link to="/register"> Register |</Link></li>
        <li><Link to="/"> Home</Link></li>
       
    </ul>
)
}
export default NavBar