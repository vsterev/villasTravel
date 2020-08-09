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
        console.log(isAgree)
        // return function () {
        //     setLikes([])
        // }
    }, [])
    const renderNames = () => {
        let i
        let t = [];
        for (i = 0; i < 4; i++) {
            t.push(<div><label> Client {i + 1}:</label><input type="text" /></div>)
        }
        return t;
    }
    return (
        <div>
            <h2>Book Villa - {villaName} in {region}</h2>
            <div><img src={imageUrl} width="450" alt={villaName} /></div>
            <div>date chek-in: {date} for {nights} nights</div>
            <div>maximum acomodated person: {beds}</div>
            <div>price: {price}</div>
            <div><textarea name="priceDescription" value={priceDescription} disabled cols="60" rows='6'></textarea></div>
            <div> {renderNames()}</div>
            <div><input type="checkbox" checked={isAgree} onChange={() => setIsAgree(!isAgree)} id="checkbox" name="checkbox"/><label htmlFor="checkbox">Please confirm price and cancelation policy</label><br /></div>
            <div><button disabled={!isAgree}>Make reservation</button></div>
        </div>
    )
}
export default BookVilla