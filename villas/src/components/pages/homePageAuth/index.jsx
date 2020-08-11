import React from 'react'
import NavBar from '../../navbar'
import HomeAuth from '../../homeAuth'

const HomepageAuth = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                <HomeAuth />
            </main>
        </React.Fragment>
    )
}
export default HomepageAuth