import React, { useContext } from 'react'
import AuthContext from '../../utils/context'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const { loggedIn } = useContext(AuthContext)
    console.log(useContext(AuthContext))
    return (
        <ul>
            {!loggedIn && <li><Link to="/login">Login |</Link></li>}
            {!loggedIn && <li><Link to="/register"> Register |</Link></li>}
            {loggedIn && <li><Link to="/logout"> Logout |</Link></li>}
            <li><Link to="/"> Home</Link></li>

        </ul>
    )
}
export default NavBar