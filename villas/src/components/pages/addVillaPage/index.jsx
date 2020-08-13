import React from 'react'
import AddVila from '../../addVila'
import NavBar from '../../navbar'
import Footer from '../../footer'

const AddVilla = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
                <AddVila />
            </main>
            <br />
            <Footer />
        </React.Fragment >
    )
}
export default AddVilla