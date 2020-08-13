import React from 'react'
import DetailsReservation from '../../detailsReservation'
import NavBar from '../../navbar'
import Footer from '../../footer'

const DetailsReservationPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
            <DetailsReservation />
            </main>
            <br />
            <Footer />
        </React.Fragment>

    )
}
export default DetailsReservationPage