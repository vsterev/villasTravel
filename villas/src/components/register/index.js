import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [repass, setRepass] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { logIn } = useContext(AuthContext)
    const history = useHistory()

    const buttonHandler = (e) => {
        e.preventDefault();
        if (password !== repass) {
            setErrorMessage('Password and RePassword don\'t match')
            return
        }
        userService.register({ email, password, name },
            (data) => {
                history.push('/')
                console.log('userDATA', userData)
                const { userData } = data
                logIn(userData)
                setSuccessMessage(e)
            },
            (e) => {
                console.log({ 'error': e })
                setErrorMessage(e)
            }
        )
            .catch(err => {
                console.log(err)
            })
    }

    const isEnabled = email.length > 0 && password.length > 0 && repass.length > 0 && name.length > 0

    return (
        <section>
            <h2 className="header">Registeration Form</h2>
            {/* <form onSubmit={buttonHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please enter name" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />
                <label>Re-password</label>
                <input type="password" id="repass" value={repass} onChange={(e) => setRepass(e.target.value)} placeholder="Please retype password" />
                <button type="submit" disabled={!isEnabled}>Register</button>
                {!!errorMessage && <span className="error" >{errorMessage}</span>}
            </form> */}
            <div className="card-deck d-flex justify-content-center">

                <Form onSubmit={buttonHandler}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please enter name and surname" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Re-password</Form.Label>
                        <Form.Control type="password" value={repass} onChange={(e) => setRepass(e.target.value)} placeholder="Please retype password" />
                    </Form.Group>
                    {!!errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {!!successMessage && <Alert variant="success">{successMessage}</Alert>}
                    <Button variant="primary" type="submit" disabled={!isEnabled}>Register</Button>
                </Form>
            </div>
        </section>
    )
}
export default Register