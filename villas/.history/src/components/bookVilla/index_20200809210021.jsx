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
        for (i = 0; i < beds; i++) {
            t.push(<div key={i}><label> Client {i + 1}:<input type="text" name={`client${i+1}`} placeholder="name surname" /></label></div>)
        }
        return t;
    }
    const reservationHandler = (e) => {
        e.preventDefault()
        console.log('tuk')
        const clients = [];
        let i;
        let currValue = ''
        for (i = 0; i < beds; i++) {
            currValue = e.target[`client${i+1}`].value
            // clients.push(e.target[`client${i+1}`].value)
            console.log(currValue)
        }
        console.log(clients)
    }
    return (
        <div>
            <h2>Book Villa - {villaName} in {region}</h2>
            <div><img src={imageUrl} width="450" alt={villaName} /></div>
            <div>date chek-in: {date} for {nights} nights</div>
            <div>maximum acommodated person: {beds}</div>
            <div>price: {price} EUR</div>
            <div><textarea name="priceDescription" value={priceDescription} disabled cols="60" rows='6'></textarea></div>
            <div><label>  confirm policy and price<input type="checkbox" checked={isAgree} onChange={() => setIsAgree(!isAgree)} id="checkbox" name="checkbox" /></label></div>
            {isAgree &&
                <form onSubmit={reservationHandler}>
                    {renderNames()}
                    <div><button disabled={!isAgree} type="submit" >Make reservation</button></div></form>}
        </div>
    )
}
export default BookVilla