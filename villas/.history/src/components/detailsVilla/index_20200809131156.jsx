import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import AuthContext from '../../utils/context'

const VillaDetail = () => {
    const { user } = useContext(AuthContext)
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
    const [isBooked, setIsBooked] = useState(false) //
    const [msg, setMsg] = useState('')

    const villaId = params.id

    const token = parseCookie('x-auth-token')
    useEffect(() => {
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
    }, [villaId, likes])
    const likeHandler = (e) => {
        villaService.villaLike(token, villaId)
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Details Viilla Page</h2>
            <h3> {villaName} in {region}</h3>
            <img src={imageUrl} width="600" alt={villaName} />
            <div>Likes: {likes.length} - 
            {likes.includes(user.userId) ? <span> ou have allready liked this villa</span> : <button onClick={likeHandler}>Like this villa</button>}
            </div>
            <div>availible stay from: {date} for {nights} nights</div>
            <div>price for stay: {price} EUR</div>
            <div>policy: {priceDescription}</div>
            <div>maximum accomodation - {beds} person</div>
            <div>description: {description}</div>
            {imageUrl2 && <img src={imageUrl2} width="400" alt={villaName} />}
            {imageUrl3 && <img src={imageUrl3} width="400" alt={villaName} />}


            {!!msg && <div>{msg}</div>}
        </div>
    )
}
export default VillaDetail