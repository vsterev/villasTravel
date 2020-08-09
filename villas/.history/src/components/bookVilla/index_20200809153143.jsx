import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookVilla = () => {
    const [villaName, setVillaName] = useState('')
    const [region, setRegion] = useState('')
    const [date, setDate] = useState('')
    const [beds, setBeds] = useState(0)
    const [nights, setNights] = useState('0')
    const [price, setPrice] = useState('0')
    const [priceDescription, setPriceDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [msg, setMsg] = useState('')
    useEffect(() => {

    }, [])
    const params = useParams();
    const { id } = params
    return (
        <div>
            <h2>Book Villa - {id}</h2>
        </div>
    )
}
export default BookVilla