import React from 'react'
import NavBar from '../../navbar'
import styles from './error.module.css'
import Footer from '../../footer'
import { Card } from 'react-bootstrap'

const ErrorPage = ({ msg }) => {
    return (
        <React.Fragment>
            <NavBar />
            <main className={styles.bg}>
                <div>
                    <Card body className={styles.message}>
                        <h2>Error Page</h2>
                        <h3>{msg}</h3>
                    </Card>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}
export default ErrorPage
