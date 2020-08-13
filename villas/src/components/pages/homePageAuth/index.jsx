import React from 'react'
import NavBar from '../../navbar'
import HomeAuth from '../../homeAuth'
import Footer from '../../footer'

const HomepageAuth = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <HomeAuth />
            </main>
            <br />
            <Footer />
        </React.Fragment>
    )
}
export default HomepageAuth