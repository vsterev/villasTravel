import React from 'react'
import styles from './menu.module.css'
import Link from '../shared/link'
import getNavigations from '../utils/navLinks'
import AuthContext from '../utils/context.jsx'
class Menu extends React.Component {
    static contextType = AuthContext
    render() {
        const { user, loggedIn } = this.context
        const links = getNavigations(loggedIn , user)
        return (
            <aside className={styles.Aside}>
                <ul>
                    {links.map((link, ind) => {
                        return <Link key={ind} to={link.path} type="aside">{link.title}</Link>
                    }
                    )}
                    {/* <Link to="/home" type="aside">Home</Link>
                <Link to="/" type="aside">Posts</Link>
                <Link to="/create" type="aside">Create Post</Link>
                <Link to="/login" type="aside">Login</Link>
                <Link to="/register" type="aside">Register</Link>
                <Link to="/profile" type="aside">Profile</Link> */}
                </ul>
            </aside>
        )
    }
}
export default Menu