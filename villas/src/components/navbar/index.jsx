import React, { useContext } from 'react'
import AuthContext from '../../utils/context'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap/';
import logo from './logo.png'

const NavBar = () => {
    const { loggedIn, user } = useContext(AuthContext)
    return (
        // <ul>
        //     {!loggedIn && <li><Link to="/login">Login |</Link></li>}
        //     {!loggedIn && <li><Link to="/register"> Register |</Link></li>}
        //     {loggedIn && <li><Link to="/logout"> Logout |</Link></li>}
        //     {loggedIn && <li><Link to="/profile"> Profile|</Link></li>}
        //     {loggedIn && <li><Link to="#"> {user.name} |</Link></li>}
        //     <li><Link to="/"> Home</Link></li>

        // </ul>
        // <div>
        //     <ButtonToolbar className="custom-btn-toolbar">
        //         <LinkContainer to="/"><Button>Home</Button></LinkContainer>
        //         <LinkContainer to="/register"><Button>Register</Button></LinkContainer>
        //         <LinkContainer to="/login"><Button>Login</Button></LinkContainer>
        //         <LinkContainer to="/logout"><Button>Logout</Button></LinkContainer>
        //         <LinkContainer to="/profile"> <Button>Profile</Button></LinkContainer>
        //     </ButtonToolbar>
        // </div>
   
                // <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <Navbar  bg="light" variant="light" >
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="logo-antiCovid-travel" width="250" height="50" />
                    </Navbar.Brand>
                <Nav fill variant="tabs" bg="light" >
                    <Nav.Item><Nav.Link as={Link} to="/">Home</Nav.Link></Nav.Item>
                    {!loggedIn && <Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>}
                    {!loggedIn && <Nav.Item><Nav.Link as={Link} to="/register">Register</Nav.Link></Nav.Item>}
                    {loggedIn && <Nav.Item><Nav.Link as={Link} to="/add-villa">Add villa...</Nav.Link></Nav.Item>}
                    {loggedIn && <Nav.Item><Nav.Link as={Link} to="/profile">Profile</Nav.Link></Nav.Item>}
                    {loggedIn && <Nav.Item><Nav.Link as={Link} to="/logout">Logout</Nav.Link></Nav.Item>}
                    {loggedIn && <Nav.Item><Nav.Link className="justify-content-end" disabled>Hello, {user.name}</Nav.Link></Nav.Item>}
                </Nav>
            </Navbar>
    )
}
export default NavBar