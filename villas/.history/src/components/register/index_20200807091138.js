import React from 'react'
import styles from './register.module.css'
import userService from '../../services/userService'
// import withForm from '../shared/hocs/withForms.jsx'
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            repass: ''
        }
    }

    // emailOnChangeHandler = this.props.controlChangeHandlerFactory('email')

    buttonHandler = (e) => {
        e.preventDefault();
        const { email, password, repass } = this.state
        console.log('Email: ', email)
        console.log('Password: ', password)
        console.log('Re-password: ', repass)
        if(password!==repass) {
            throw new Error('Password and RePassword don\'t match')
        }
        userService.register({ email, password })
            .then(registred => console.log(registred))
            .catch(err => console.log(err))
    }
    changeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        const { email, password, repass } = this.state
        return (
            <div className={styles.Register}>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.buttonHandler}>
                    <div className={styles['form-control']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={this.changeHandler} placeholder="Please enter email" />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={this.changeHandler} placeholder="Please enter password" />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Re-password</label>
                        <input type="password" id="repass" value={repass} onChange={this.changeHandler} placeholder="Please retype password" />
                    </div>
                    <div className={styles['form-control']}>
                        {/* <button type="button">Register</button> */}
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Register
// export default withForm(Register, initialFormState)