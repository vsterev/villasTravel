import React from 'react'
import styles from './register.module.css'
// import withForm from '../shared/hocs/withForms.jsx'
class Register extends React.Component {
    state= {
        email:'',
        password: '',
        repassword: ''
    }
    // emailOnChangeHandler = this.props.controlChangeHandlerFactory('email')

    buttonHandler = () => {
        const { email, password, rePassword } = this.state
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
                        <input type="email" id="email" onChange={this.setState(email)} placeholder="Please enter email"/>
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
export default Register
// export default withForm(Register, initialFormState)