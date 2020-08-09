import React from 'react'
// import styles from '../../components/register/register.module.css'
// import Post from '../shared/post'
import userService from '../../services/userService'
import AuthContext from '../../utils/context'
class Login extends React.Component {
    state = {
        origamis: [],
        password: '',
        email: '',
        loginError: ''
    }
    static contextType = AuthContext
    getLogin(n) {
        fetch(`http://localhost:9999/api/origami${n ? `/${n}` : ``}`)
            .then(res => res.json())
            .then(origamis => this.setState({ origamis }))
            .catch(err => console.log(err))
    }
    // componentDidMount() {
    //     this.getLogin()
    // }
    // renderOrigami() {
    //     return this.state.origamis.map(
    //         (origam, id) => <Post key={id} description={origam.description} author={origam.author.username} />
    //     )
    // }
    inputChangeHandler = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        userService
            .login(
                { username: email, password },
                (userData) => {
                    console.log('userinfo: ', userData, 'context: ', this.context)
                    this.context.logIn(userData)
                    this.props.history.push('/')
                },
                (e) => {
                    console.log({ 'error': e })
                    this.setState({ loginError: e })
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
    render() {
        const { email, password, loginError } = this.state;
        const isEnabled = email.length > 0 && password.length > 0
        return (
            <div className={styles.Login}>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.submitHandler}>
                    <div className={styles['form-control']}>
                        <label>Email</label>
                        <input type="text" onChange={this.inputChangeHandler} name="email" onBlur={this.errorHandler} />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Password</label>
                        <input type="password" onChange={this.inputChangeHandler} name="password" onBlur={this.errorHandler} />
                    </div>
                    <div className={styles['form-control']}>
                        <button type="submit" disabled={!isEnabled}>Login</button>
                    </div>
                    {!!loginError && <div className={styles.errormsg}>{loginError}</div>}
                </form>
            </div>
        )
    }
}
export default Login