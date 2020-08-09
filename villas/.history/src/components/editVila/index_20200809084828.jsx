import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
const EditVilla = () => {

    const history = useHistory()
    const { id } = useParams()
    const token = parseCookie('x-auth-token')

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
    const [msg, setMsg] = useState('')

    useEffect(() => {
        villaService.villaDetails(id, token)
            .then(res => {

                if (!!res.status) {
                    const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3 } = res.villa
                    setName(name)
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
                }
            })
            .catch(err => console.log(err))
    }, [])
    const editHandler = (e) => {
        e.preventDefault()
        const data = { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3 }
        villaService.villaEdit(data, token, id)
            .then(data => {
                if (!data.status) {
                    setMsg(data.msg)
                } else {
                    // history.push(`/villa/${id}`)
                    setMsg(data.msg)
                }
            })
            .catch(err => console.log(err))
    }
    const deleteHandler = (e) => {
        e.preventDefault()
        if (window.confirm('This villa will be delete, please confirm')) {
            console.log('yes')
            villaService.villaDelete(token, id)
                .then(data => {
                    if (!data.status) {
                    setMsg(data.msg)
                    }
                    history.push('/profile')
                })
                .catch(err => console.log(err))

            return
        }
        console.log('no')
    }
   
    return (
        <div>
            <h2> Edit existing Villa </h2>
            <form onSubmit={editHandler}>
                <div>
                    <label htmlFor="name">property name: </label>
                    <input type="text" name='name' value={name||''} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="region">region : </label>
                    <input type="text" name='region' value={region||''} onChange={(e) => setRegion(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">date : </label>
                    <input type="date" name='date' value={date||''} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="beds">number of beds : </label>
                    <input type="number" name='beds' value={beds||''} onChange={(e) => setBeds(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="nights">number of nights : </label>
                    <input type="number" name='nights' value={nights||''} onChange={(e) => setNights(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price"> price per stay : </label>
                    <input type="text" name='price' value={price||''} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="priceDescription"> price description  : </label>
                    <input type="text" name='priceDescription' value={priceDescription||''} onChange={(e) => setPriceDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description"> description  : </label>
                    <input type="text" name='description' value={description||''} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl"> image 1  : </label>
                    <input type="text" name='imageUrl' value={imageUrl||''} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl2"> image 2  : </label>
                    <input type="text" name='imageUrl2' value={imageUrl2||''} onChange={(e) => setImageUrl2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imageUrl3"> image 3  : </label>
                    <input type="text" name='imageUrl3' value={imageUrl3||''} onChange={(e) => setImageUrl3(e.target.value)} />
                </div>
                {!!msg && <div>{msg}</div>}
                <div>
                    <button type="submit">Confirm editing</button>
                </div>
                <div><button onClick={deleteHandler}>Delete </button></div>
            </form>
        </div>
    )
}
export default EditVilla
