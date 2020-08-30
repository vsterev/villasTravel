import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import styles from './login.module.css'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    const { logIn } = useContext(AuthContext)
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();
        userService
            .login({ email, password })
            .then(res => {
                if (!!res.status) {
                    const token = res.token
                    if (token) {
                        document.cookie = `x-auth-token=${token}`
                    }
                    if (!!res.userData) {
                        logIn(res.userData)
                        history.push('/')
                    }
                } else {
                    const msg = 'Unsuccessful login - user not exists or password incorrect !'
                    console.log({ 'error': msg })
                    setErrMassage(msg)
                }
            })
            .catch(err => console.log(err))
    }
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     userService
    //         .login(
    //             { email, password },
    //             (userData) => {
    //                 logIn(userData)
    //                 history.push('/')
    //             },
    //             (e) => {
    //                 console.log({ 'error': e })
    //                 setErrMassage(e)
    //             }
    //         )

    //         .catch(err => console.log(err))
    // }
    const isEnabled = email.length > 0 && password.length > 0
    return (
        <section className={styles.bg}>
            {/* <div className="card-deck d-flex justify-content-center"> */}
            <div className={styles.loginform}>
                <h2>Login</h2>
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
                    <Form.Group>
                        <Button variant="primary" type="submit" disabled={!isEnabled}>Submit</Button>
                        <Form.Text className={styles.info}>
                            If you don't have account please <Link className={styles.info} to="/register">register first</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
    // }
}
export default Login