import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import styles from './register.module.css'
import './style.css'
// import Post from '../shared/post'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
// static contextType = AuthContext
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
            // .then((res) => {
            //     // if (!!res.username) {
            //     //     return this.props.history.push('/')
            //     // }
            //     // console.log(res.error)
            // })
            .catch(err => console.log(err))
    }
    // const errorHandler = (e) => {
    //     const { name } = e.target
    //     console.log(name, this.state[name])
    // }
    // render() {
    // const { email, password, loginError } = this.state;
    const isEnabled = email.length > 0 && password.length > 0
    return (
        // <div className={styles.Login}>
        <h1>Login page</h1>
        <div class="form">
            <form onSubmit={submitHandler}>
                {/* <div className={styles['form-control']}> */}
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name="email" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                    <button type="submit" disabled={!isEnabled}>Login</button>
                {/* </div> */}
                {/* {!!errMassage && <div className={styles.errormsg}>{errMassage}</div>} */}
                {!!errMassage && <div><span class="error">{errMassage}</span></div>}
            </form>
        </div>
    )
    // }
}
export default Login