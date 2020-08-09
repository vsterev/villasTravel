import React, { useContext } from 'react'
import styles from './header.module.css'
import Link from '../shared/link'
import logo from '../../images/white-origami-bird.png'
import getNavigations from '../utils/navLinks'
import AuthContext from '../utils/context.jsx'
// class Header extends React.Component {
// static contextType = AuthContext
// render() {
// const { loggedIn, user } = this.context
const Header = () => {
    const { loggedIn, user } = useContext(AuthContext)
    const links = getNavigations(loggedIn, user)
    return (
        <nav className={styles.Navigation}>
            <ul>
                <Link key="0" to="/" type="nav"><img id="logo" src={logo} alt="logo" /></Link>
                {
                    links.map((link, ind) => {
                        return <Link key={ind + 1} to={link.path} type="nav">{link.title}</Link>
                    })
                }
                {loggedIn && <Link to="/#" type="nav" >Hello, {user.username}</Link>}

                {/* <Link to="/" type="nav"><img id="logo" src={logo} alt="logo" /></Link>
                    <Link to="/home" type="nav">Home</Link>
                    <Link to="/" type="nav">Posts</Link>
                    <Link to="/create" type="nav">Create Post</Link>
                    <Link to="/login" type="nav">Login</Link>
                    <Link to="/register" type="nav">Register</Link>
                    <Link to="/profile" type="nav">Profile</Link> */}
            </ul>
        </nav>
    )
    // }
}
export default Header