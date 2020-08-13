import React from 'react'
import EditVilla from '../../editVila'
import NavBar from '../../navbar'
import Footer from '../../footer'

const EditVillaPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <EditVilla />
            </main>
            <br />
            <Footer />
        </React.Fragment>

    )
}
export default EditVillaPage