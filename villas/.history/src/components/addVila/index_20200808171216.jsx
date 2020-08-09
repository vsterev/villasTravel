import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
const AddVilla = () => {

const [name, setName] = useState('')
const [region, setRegion] = useState('')
const [date, setDate] = useState('')
const [beds, setBeds] = useState('')
const [nights, setNights] = useState('')
const [price, setPrice] = useState('')
const [priceDescription, setPriceDescription] = useState('')
const [description, setDescription] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [imageUrl2, setImageUrl2] = useState('')
const [imageUrl3, setImageUrl3] = useState('')
const submitHandler = () =>{
    
}
    
    return (
        <div>
            <h2> Add new Villa </h2>
            <form onSubmit={submitHandler}>

                <button type="submit">Create Villa</button>
            </form>
        </div>
    )
}
export default AddVilla
