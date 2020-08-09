import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
const AddVilla = () => {

    const [name, setName] = useState('')
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
    const [msg, setMsg] = useState('')
    const history = useHistory()
    const token = parseCookie('x-auth-token')
    const submitHandler = (e) => {
        e.preventDefault()
        const data = { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3 }
        console.log(data)
        villaService.addVilla(data, token)
            .then(data => {
                if (!data.status) {
                    setMsg(data.msg)
                } else {
                    history.push('/profile')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2> Add new Villa </h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">property name: </label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="region">region : </label>
                    <input type="text" name='region' value={region} onChange={(e) => setRegion(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">date : </label>
                    <input type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="beds">number of beds : </label>
                    <input type="number" name='beds' value={beds} onChange={(e) => setBeds(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="nights">number of nights : </label>
                    <input type="number" name='nights' value={nights} onChange={(e) => setNights(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price"> price per stay : </label>
                    <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="priceDescription"> price description  : </label>
                    <input type="text" name='priceDescription' value={priceDescription} onChange={(e) => setPriceDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description"> description  : </label>
                    <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl"> image 1  : </label>
                    <input type="text" name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl2"> image 2  : </label>
                    <input type="text" name='imageUrl2' value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl3"> image 3  : </label>
                    <input type="text" name='imageUrl3' value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} />
                </div>
                {!!msg && <div className={styles.errormsg}>{msg}</div>}
                                <div>
                    <button type="submit">Create Villa</button>
                </div>
            </form>
        </div>
    )
}
export default AddVilla
