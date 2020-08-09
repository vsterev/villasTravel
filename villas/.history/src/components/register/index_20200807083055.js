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
        const { email, password, repassword } = this.state
        console.log('Email: ', email)
        console.log('Password: ', password)
        console.log('Re-password: ', repassword)
    }
    render() {
        const { email, password, rePassword } = this.state
        return (
            <div className={styles.Register}>
                <h1>{this.props.title}</h1>
                <form>
                    <div className={styles['form-control']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value = {email} onChange={()=>this.setState({email:e.target.value})} placeholder="Please enter email"/>
                    </div>
                    {/* <div className={styles['form-control']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={this.setState(password)} placeholder="Please enter password"/>
                    </div> */}
                    {/* <div className={styles['form-control']}>
                        <label>Re-password</label>
                        <input type="password" id="repassword" value={repassword} onChange={this.setState(repassword)} placeholder="Please retype password" />
                    </div> */}
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