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
        villaService.villaDetails(villaId, token)
            .then(data => {
                if (!data.status) {
                    setMsg('Eroor finding this villa')
                }
                // console.log(data)
                const { name, region, date, beds, nights, price, priceDescription, imageUrl } = data.villa
                // console.log(name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, likes, reservationId)
                setVillaName(name)
                setRegion(region)
                setDate(date)
                setBeds(beds)
                setNights(nights)
                setPrice(price)
                setPriceDescription(priceDescription)
                setDescription(description)
                setImageUrl(imageUrl)
                setImageUrl2(imageUrl2)
                setImageUrl3(imageUrl3)
                setLikes(likes)
                setIsBooked(!!reservationId)
            })
            .catch(err => console.log(err))
        // return function () {
        //     setLikes([])
        // }
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