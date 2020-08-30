import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import AddGoogleMap from '../shared/cloudinary-add'
import { Form, Button, Alert, Row, Col } from 'react-bootstrap'
import Map from '../shared/googleMapAdd'

const AddVilla = () => {
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [date, setDate] = useState('')
    const [beds, setBeds] = useState(0)
    const [nights, setNights] = useState('0')
    const [price, setPrice] = useState('0')
    const [priceDescription, setPriceDescription] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState(null)
    const [imageUrl2, setImageUrl2] = useState(null)
    const [imageUrl3, setImageUrl3] = useState(null)
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const [msg, setMsg] = useState('')
    const history = useHistory()
    const token = parseCookie('x-auth-token')
    const submitHandler = (e) => {
        e.preventDefault()
        const data = { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, coordinates }
        console.log(data)
        villaService.addVilla(data, token)
            .then(data => {
                if (!data.status) {
                    // setMsg(data.msg)
                } else {
                    history.push('/profile')
                }
            })
            .catch(err => console.log(err))
    }
    const handlerSetImage = (i) => {
        switch (i) {
            case 1:
                return (v) => setImageUrl2(v)
            case 2:
                return (v) => setImageUrl3(v)
            default:
                return (v) => setImageUrl(v)
        }
    }
    // const handlerSetImage = (i, v) => {
    //     if (i === 1) {
    //         return setImageUrl2(v)
    //     }
    //     if (i === 2) {
    //         return setImageUrl3(v)
    //     } if (i === 0) {
    //         return setImageUrl(v)
    //     }
    // }
    const renderButtonsImage = () => {
        const r = []
        for (let i = 0; i < 3; i++) {
            r.push(
                <Col key={i}><AddGoogleMap action={handlerSetImage(i)} num={i} /></Col>
            )
        }
        return r;
    }
    const getCoordinates = () => {
        return v => {
            setCoordinates(v)
        }
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
                        
                        <Row>
                            {renderButtonsImage()}
                        </Row>
                        <Row>
                            <Col>{<br></br>}</Col>
                        </Row>
                        <Row>
                            <Col>{imageUrl && <img src={imageUrl} alt="picture1" width="350" />}</Col>
                            <Col>{imageUrl2 && <img src={imageUrl2} alt="picture2" width="350" />}</Col>
                            <Col>{imageUrl3 && <img src={imageUrl3} alt="picture3" width="350" />}</Col>
                        </Row>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Latitude</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name='lat' value={coordinates.lat || ''} onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Longitude</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name='lng' value={coordinates.lng || ''} onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col>
                                <div style={{ height: '400px', width: '100%', position: 'relative' }}>
                                    <Map center={{ lat: 42.884301, lng: 23.164285 }} action={getCoordinates()} zoom={5} />

                                </div>
                            </Col>
                        </Row>
                        {/* {renderButtonsImage()} */}
                        {!!msg && <Alert variant="danger">{msg}</Alert>}
                        <br></br>
                        <Row><Col></Col><Col><Button variant="primary" type="submit" >Add property</Button></Col><Col></Col></Row>

                    </Form>
                </div>
            </section>
        </div>
    )
}
export default AddVilla
