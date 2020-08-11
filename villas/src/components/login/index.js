import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import './style.css'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    const { logIn, user, loggedIn } = useContext(AuthContext)
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();
        userService
            .login(
                { email, password },
                (userData) => {
                    logIn(userData)
                    history.push('/')
                },
                (e) => {
                    console.log({ 'error': e })
                    setErrMassage(e)
                }
            )

            .catch(err => console.log(err))
    }
    const isEnabled = email.length > 0 && password.length > 0
    return (
        <section>
            <h2 className="header">Login form</h2>
            <div className="card-deck d-flex justify-content-center">
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                   {!!errMassage && <Alert variant="danger">{errMassage}</Alert>}
                    <Button variant="primary" type="submit" disabled={!isEnabled}>Submit</Button>
                </Form>
            </div>
        </section>
    )
    // }
}
export default Login