import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import styles from './register.module.css'
import './style.css'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
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
                console.log('userDATA', userData)
                const {userData} = data
                logIn(userData)
                history.push('/')
            },
            (e) => {
                console.log({ 'error': e })
                setErrorMessage(e)
            }
        )
            // .then(response => {
            //     console.log(response)
            // if (!response.status){
            //     setErrorMessage(response.msg)
            //     return
            // }
            // const authToken = response.headers.get('Authorization')
            // console.log(authToken)
            // if (authToken) {
            //     document.cookie = `x-auth-token=${authToken}`
            // }
            // return response.json()

            //do 
            // })
            .catch(err => {
                console.log(err)
            })
    }
    // changeHandler = (e) => {
    //     this.setState({ [e.target.id]: e.target.value })
    // }
    // render() {
    // const { email, password, repass, name } = this.state
    const isEnabled = email.length > 0 && password.length > 0 && repass.length > 0 && name.length > 0

    return (
        // <div className={styles.Register}>
        <div class="form">
            <h1>{props.title}</h1>
            <form onSubmit={buttonHandler}>
                {/* <div className={styles['form-control']}> */}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please enter name" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                <label>Re-password</label>
                <input type="password" id="repass" value={repass} onChange={(e) => setRepass(e.target.value)} placeholder="Please retype password" />
                {/* </div> */}
                {/* <div className={styles['form-control']}> */}
                {/* <button type="button" onClick={this.buttonHandler}>Register</button> */}
                <button type="submit" disabled={!isEnabled}>Register</button>
                {/* </div> */}
                {!!errorMessage && <span class="error" >{errorMessage}</span>}
            </form>
        </div>
    )
    // }
}
export default Register
// export default withForm(Register, initialFormState)