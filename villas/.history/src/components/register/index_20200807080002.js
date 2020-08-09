import React from 'react'
import styles from './register.module.css'
// import withForm from '../shared/hocs/withForms.jsx'
class Register extends React.Component {
    // emailOnChangeHandler = this.props.controlChangeHandlerFactory('email')
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password')
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword')
    buttonHandler = () => {
        const { email, password, rePassword } = this.props.getFormState()
        console.log('Email: ', email)
        console.log('Password: ', password)
        console.log('Re-password: ', rePassword)
    }
    render() {
        const { email, password, rePassword } = this.props.getFormState()
        return (
            <div className={styles.Register}>
                <h1>{this.props.title}</h1>
                <form>
                    <div className={styles['form-control']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.props.controlChangeHandlerFactory('email')} value={email} placeholder="Please enter email"/>
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.passwordOnChangeHandler} value={password} placeholder="Please enter password"/>
                    </div>
                    <div className={styles['form-control']}>
                        <label>Re-password</label>
                        <input type="password" onChange={this.rePasswordOnChangeHandler} value={rePassword} placeholder="Please retype password" />
                    </div>
                    <div className={styles['form-control']}>
                        <button type="button" onClick={this.buttonHandler}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}
const initialFormState = {
    email: '',
    password: '',
    rePassword: ''
}
export default Register
// export default withForm(Register, initialFormState)