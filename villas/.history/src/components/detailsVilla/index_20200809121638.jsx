import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
const VillaDetail = () => {
    const params = useParams()
    const [villaName, setVillaName] = useState('')
    const [region, setRegion] = useState('')
    const [date, setDate] = useState('')
    const [beds, setBeds] = useState(0)
    const [nights, setNights] = useState('0')
    const [price, setPrice] = useState('0')
    const [priceDescription, setPriceDescription] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageUrl2, setImageUrl2] = useState('')
    const [imageUrl3, setImageUrl3] = useState('')
    const [likes, setLikes] = useState([])
    const [isBooked, setIsBooked] = useState(false)

    const [msg, setMsg] = useState('')

    const villaId = params.id



    useEffect(() => {
        const token = parseCookie('x-auth-token')
        villaService.villaDetails(villaId, token)
            .then(data => {
                if (!data.status) {
                    setMsg('Eroor finding this villa')
                }
                // console.log(data)
                const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, likes, reservationId } = data.villa
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
                setIsBooked(reservationId !== null)
            })
            .catch(err => console.log(err))
    }, [villaId])

    return (
        <div>
            <h2>Details Viilla Page</h2>
            <div> {villaName} / {region}</div>



            {!!msg && <div>{msg}</div>}
        </div>
    )
}
export default VillaDetail