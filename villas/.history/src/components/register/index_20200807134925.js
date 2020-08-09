import React, { useState, useEffect } from 'react'
import styles from './register.module.css'
import userService from '../../services/userService'
// import withForm from '../shared/hocs/withForms.jsx'
// class Register extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             email: '',
//             password: '',
//             name:'',
//             repass: ''
//         }
//     }

// emailOnChangeHandler = this.props.controlChangeHandlerFactory('email')
const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [repass, setRepass] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const buttonHandler = (e) => {
        e.preventDefault();
        // const { email, password, repass, name } = this.state
        console.log('Email: ', email)
        console.log('Password: ', password)
        console.log('Re-password: ', repass)
        if (password !== repass) {
            setErrorMessage('Password and RePassword don\'t match')
        }
        userService.register({ email, password, name })
            .then(registred => {
                console.log(registred)
                if (registred.status===403){
                    setErrorMessage(registred.msg)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    // changeHandler = (e) => {
    //     this.setState({ [e.target.id]: e.target.value })
    // }
    // render() {
    // const { email, password, repass, name } = this.state
    return (
        <div className={styles.Register}>
            <h1>{props.title}</h1>
            <div>{errorMessage}</div>
            <form onSubmit={buttonHandler}>
                <div className={styles['form-control']}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />
                    <div>this will be your login</div>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="email">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please enter name" />
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />
                </div>
                <div className={styles['form-control']}>
                    <label>Re-password</label>
                    <input type="password" id="repass" value={repass} onChange={(e) => setRepass(e.target.value)} placeholder="Please retype password" />
                </div>
                <div className={styles['form-control']}>
                    {/* <button type="button" onClick={this.buttonHandler}>Register</button> */}
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
    // }
}
export default Register
// export default withForm(Register, initialFormState)