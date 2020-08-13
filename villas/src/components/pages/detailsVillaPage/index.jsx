import React from 'react'
import DetailsVilla from '../../detailsVilla'
import NavBar from '../../navbar'
import Footer from '../../footer'

const DetailsVillaPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <DetailsVilla />
            </main>
            <br />
            <Footer />
        </React.Fragment>

    )
}
export default DetailsVillaPage