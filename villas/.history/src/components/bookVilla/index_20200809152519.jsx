import React from 'react'
import {useParams} from 'react-router-dom'

const BookVilla = () => {
    const params = useParams();
    const {id} = params
    return (
        <div>
            <h2>Book Villa - </h2>
        </div>
    )
}
export default BookVilla