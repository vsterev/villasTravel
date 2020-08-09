import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './register.module.css'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
const PasswordChange = () => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    // const { logIn, user, loggedIn } = useContext(AuthContext)
    const history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault();
        if (rePassword !== newPassword) {
            return (setErrMassage('Password and Repeat password don\'t match'))
        } else {

            setErrMassage('')
        }

    }

    const isEnabled = newPassword.length > 0 && currentPassword.length > 0 && rePassword.length > 0
    return (
        <div className={styles.Login}>
            <form onSubmit={submitHandler}>
                <div className={styles['form-control']}>
                    <label>Current Password</label>
                    <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} name="currentPassword" />
                </div>
                <div className={styles['form-control']}>
                    <label>New Password</label>
                    <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} name="newPassword" />
                </div>
                <div className={styles['form-control']}>
                    <label>Retype New Password</label>
                    <input type="password" onChange={(e) => setRePassword(e.target.value)} value={rePassword} name="rePassword" />
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
export default PasswordChange