import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
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
    const [isAgree, setIsAgree] = useState(false)
    const params = useParams();
    const villaId = params.id
    useEffect(() => {
        const token = parseCookie('x-auth-token')
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
            console.log(is)
        // return function () {
        //     setLikes([])
        // }
    }, [])

    return (
        <div>
            <h2>Book Villa - {villaName} in {region}</h2>
            <div>chek-in: {date} for {nights} nights</div>
            <div>price: {price}</div>
            <div><textarea name="priceDescription" value={priceDescription} disabled cols="60" rows='6'></textarea></div>
            <img src={imageUrl} width="450" alt={villaName} />
            <div><label><input type="radio" value={isAgree} onChange={()=>setIsAgree(!isAgree)}/>Are you agree</label></div>
            {!!isAgree}
        </div>
    )
}
export default BookVilla