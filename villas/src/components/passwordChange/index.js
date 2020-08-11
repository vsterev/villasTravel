import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import {Form, Alert, Button} from 'react-bootstrap'
import userService from '../../services/userService'
import parseCookie from '../../utils/parseCookie'
const PasswordChange = () => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();
        const token = parseCookie('x-auth-token')
        if (rePassword !== newPassword) {
            return (setErrMassage('Password and Repeat password don\'t match'))
        } else {
            userService.passChange({ oldPassword: currentPassword, password: newPassword }, token)
                .then(data => {
                    if (!data.status) {
                        setErrMassage(data.msg)
                    } else {
                        history.push('/profile')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    const isEnabled = newPassword.length > 0 && currentPassword.length > 0 && rePassword.length > 0
    return (
        <section>
        <h2 className="header">Password change form</h2>
        <div className="card-deck d-flex justify-content-center">
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Current password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} name="currentPassword" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} name="newPassword" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Retype new assword</Form.Label>
                    <Form.Control type="password" onChange={(e) => setRePassword(e.target.value)} value={rePassword} name="rePassword" />
                </Form.Group>
                {!!errMassage && <Alert variant="danger">{errMassage}</Alert>}
                <Button variant="primary" type="submit" disabled={!isEnabled}>Submit</Button>
            </Form>
        </div>
    </section>
    )
    // }
}
export default PasswordChange