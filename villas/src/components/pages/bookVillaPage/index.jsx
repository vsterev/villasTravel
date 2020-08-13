import React from 'react'
import BookVilla from '../../bookVilla'
import NavBar from '../../navbar'
import Footer from '../../footer'

const BookVillaPage = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <br />
            <main>
            <BookVilla />
            </main>
            <br />
            <Footer />
        </React.Fragment>
    )
}
export default BookVillaPage