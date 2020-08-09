import React from 'react'
import styles from './footer.module.css'
import Link from '../shared/link'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigations from '../utils/navLinks'
import AuthContext from '../utils/context.jsx'

class Footer extends React.Component {
    static contextType = AuthContext
    num = 0;
    render() {
        const { loggedIn, user } = this.context
        const links = getNavigations(loggedIn, user)
        return (
            <footer className={styles.Footer}>
                <ul>
                    {/* <Link to="/home" type="footer">Home</Link>
                    <Link to="/" type="footer">Posts</Link>
                    <Link to="/create" type="footer">Post create</Link>
                    <Link to="/login" type="footer">Login</Link>
                    <Link to="/register" type="footer">Register</Link>
                    <Link to="/profile" type="footer">Profile</Link> */}
                    {
                        links.map((link, ind) => {
                            this.num++;
                            return <Link key={ind} to={link.path} type="footer">{link.title}</Link>
                        })
                    }
                    <Link to="/" key={this.num} type="footer"><img id="logo" src={logo} alt="logo" /></Link>
                </ul>
                <p>Software Univercity 2019 &#169;</p>
            </footer>
        )

    }
}
export default Footer