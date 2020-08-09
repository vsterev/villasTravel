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
    const params = useParams();
    const villaId = params.id
    useEffect(() => {
        villaService.villaDetails(villaId, token)
            .then(data => {
                if (!data.status) {
                    setMsg('Eroor finding this villa')
                }
                // console.log(data)
                const { name, region, date, beds, nights, price, priceDescription, imageUrl } = data.villa
                setVillaName(name)
                setRegion(region)
                setDate(date)
                setBeds(beds)
                setNights(nights)
                setPrice(price)
                setPriceDescription(priceDescription)
                setImageUrl(imageUrl)
            })
            .catch(err => console.log(err))
        // return function () {
        //     setLikes([])
        // }
    }, [])
    
    return (
        <div>
            <h2>Book Villa</h2>
            <div>{villaName} in {region}</div>
        </div>
    )
}
export default BookVilla