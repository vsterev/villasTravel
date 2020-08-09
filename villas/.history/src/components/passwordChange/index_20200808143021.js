import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './register.module.css'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
const PasswordChange = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    const { logIn, user, loggedIn } = useContext(AuthContext)
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();
    
    }

    const isEnabled = email.length > 0 && password.length > 0
    return (
        <div className={styles.Login}>
            <form onSubmit={submitHandler}>
                <div className={styles['form-control']}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name="email" />
                </div>
                <div className={styles['form-control']}>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" />
                </div>
                <div className={styles['form-control']}>
                    <button type="submit" disabled={!isEnabled}>Login</button>
                </div>
                {!!errMassage && <div className={styles.errormsg}>{errMassage}</div>}
            </form>
        </div>
    )
    // }
}
export default const PasswordChange = () => {
