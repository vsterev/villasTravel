import React from 'react'
import NavBar from '../../navbar'
import HomeNotAuth from '../../homeNotAuth'

const Homepage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <HomeNotAuth />
        </React.Fragment>
    )
}
export default Homepage