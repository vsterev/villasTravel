import React from 'react'
import NavBar from '../../navbar'
import HomeNotAuth from '../../homeNotAuth'
import Jumbotron from '../../shared/jumboron'
import Footer from '../../footer'

const Homepage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <main>
                <Jumbotron title={'Hello, people'}
                    text={'the real secure way to have a nice and secure trip is to rent our villas, please choise one of thousends offer.'}
                    subtitle={'Join us - you can be a part from the antiCovid Travel 2020 society'} />
                <HomeNotAuth />
            </main>
            <br />
        <Footer />
        </React.Fragment>
    )
}
export default Homepage