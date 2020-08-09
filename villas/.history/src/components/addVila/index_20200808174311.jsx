import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
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
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('name', name, 'region', region, 'date', date, 'beds', beds, 'nights', nights, 'price', price, 'priceDescription', priceDescription, 'description', description,
            'imageUrl', imageUrl, 'imageUrl2', imageUrl2, 'imageUrl3', imageUrl3)
    }

    return (
        <div>
            <h2> Add new Villa </h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">property name:
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="region">region :
                    <input type="text" name='region' value={region} onChange={(e) => setRegion(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="date">date :
                    <input type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="beds">number of beds :
                    <input type="number" name='beds' value={beds} onChange={(e) => setBeds(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="nights">number of nights :
                    <input type="number" name='nights' value={nights} onChange={(e) => setNights(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="price"> price per stay :
                    <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="priceDescription"> price description  :
                    <input type="text" name='priceDescription' value={priceDescription} onChange={(e) => setPriceDescription(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="description"> description  :
                    <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label > image 1  :
                    <input type="text" name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="imageUrl2"> image 2  :
                    <input type="text" name='imageUrl2' value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label htmlFor="imageUrl3"> image 3  :
                    <input type="text" name='imageUrl3' value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">Create Villa</button>
                </div>
            </form>
        </div>
    )
}
export default AddVilla
