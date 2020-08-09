import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import styles from '../../components/register/register.module.css'
// import Post from '../shared/post'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
// class Login extends React.Component {
//     state = {
//         origamis: [],
//         password: '',
//         email: '',
//         loginError: ''
//     }
// static contextType = AuthContext
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMassage, setErrMassage] = useState('')
    const { logIn } = useContext(AuthContext)
    const history = useHistory()
    // getLogin(n) {
    //     fetch(`http://localhost:9999/api/origami${n ? `/${n}` : ``}`)
    //         .then(res => res.json())
    //         .then(origamis => this.setState({ origamis }))
    //         .catch(err => console.log(err))
    // }
    // componentDidMount() {
    //     this.getLogin()
    // }
    // renderOrigami() {
    //     return this.state.origamis.map(
    //         (origam, id) => <Post key={id} description={origam.description} author={origam.author.username} />
    //     )
    // }
    // inputChangeHandler = (e) => {
    //     const { name, value } = e.target
    //     this.setState({ [name]: value })
    // }
    submitHandler = (e) => {
        e.preventDefault();
        // const { email, password } = this.state
        userService
            .login(
                { email, password },
                (userData) => {
                    console.log('userinfo: ', userData, 'context: ', this.context)
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
    errorHandler = (e) => {
        const { name } = e.target
        console.log(name, this.state[name])
    }
    // render() {
    // const { email, password, loginError } = this.state;
    const isEnabled = email.length > 0 && password.length > 0
    return (
        <div className={styles.Login}>
            <h1>{this.props.title}</h1>
            <form onSubmit={this.submitHandler}>
                <div className={styles['form-control']}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name="email" onBlur={this.errorHandler} />
                </div>
                <div className={styles['form-control']}>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" onBlur={this.errorHandler} />
                </div>
                <div className={styles['form-control']}>
                    <button type="submit" disabled={!isEnabled}>Login</button>
                </div>
                {!!loginError && <div className={styles.errormsg}>{errMassage}</div>}
            </form>
        </div>
    )
    // }
}
export default Login