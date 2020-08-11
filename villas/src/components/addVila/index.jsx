import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import { Form, Button, Alert, Row, Col } from 'react-bootstrap'
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
        villaService.addVilla(data, token)
            .then(data => {
                console.log(data)
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
            <section>
                <h2 className="header">Villa add form</h2>
                <div className="justify-content-center">
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} >
                            <Form.Label column sm="2">Property name</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label column sm="2">Region</Form.Label>
                            <Col sm="8">
                            <Form.Control type="text" name='region' value={region} onChange={(e) => setRegion(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Chek-in</Form.Label>
                            <Col sm="4">
                            <Form.Control type="date" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Beds</Form.Label>
                            <Col sm="2">
                            <Form.Control type="number" name='beds' value={beds} onChange={(e) => setBeds(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Nights</Form.Label>
                            <Col sm="2">
                            <Form.Control type="number" name='nights' value={nights} onChange={(e) => setNights(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Price</Form.Label>
                            <Col sm="2">
                            <Form.Control type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Price description</Form.Label>
                            <Col sm="8">
                            <Form.Control as="textarea" rows="3" name='priceDescription' value={priceDescription} onChange={(e) => setPriceDescription(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Description</Form.Label>
                            <Col sm="8">
                            <Form.Control as="textarea" rows="7" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Image Url 1</Form.Label>
                            <Col sm="8">
                            <Form.Control type="text" name='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Image Url 2</Form.Label>
                            <Col sm="8">
                            <Form.Control type="text" name='imageUrl' value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Image Url 3</Form.Label>
                            <Col sm="8">
                            <Form.Control type="text" name='imageUrl' value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} />
                            </Col>
                        </Form.Group>
                        {!!msg && <Alert variant="danger">{msg}</Alert>}
                        <Button variant="primary" type="submit" >Add property</Button>
                    </Form>
                </div>
            </section>
        </div>
    )
}
export default AddVilla
