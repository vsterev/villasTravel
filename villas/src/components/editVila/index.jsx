import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import './style.css'
import { Form, Row, Col, Alert, Button, InputGroup, FormControl, Card, ListGroup } from 'react-bootstrap'
import SpinnerDetail from '../shared/spinner'
const EditVilla = () => {

    const history = useHistory()
    const { id } = useParams()
    const token = parseCookie('x-auth-token')

    const [name, setName] = useState(null)
    const [region, setRegion] = useState(null)
    const [date, setDate] = useState(null)
    const [beds, setBeds] = useState(null)
    const [nights, setNights] = useState(null)
    const [price, setPrice] = useState(null)
    const [priceDescription, setPriceDescription] = useState(null)
    const [description, setDescription] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [imageUrl2, setImageUrl2] = useState(null)
    const [imageUrl3, setImageUrl3] = useState(null)
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const [viewBookings, setViewBookings] = useState(false)
    const [msg, setMsg] = useState(null)
    const [clientsNames, setClientsNames] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        villaService.villaDetails(id, token)
            .then(res => {

                if (!!res.status) {
                    const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, reservationId, coordinates } = res.villa
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
                    setCoordinates(coordinates|| {lat: '', lng: ''})
                    reservationId && reservationId.clients && setClientsNames(reservationId.clients)
                    reservationId && reservationId.comments && setComments(reservationId.comments)
                }
            })
            .catch(err => console.log(err))
    }, [id, token])
    const editHandler = (e) => {
        e.preventDefault()
        const data = { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, coordinates }
        villaService.villaEdit(data, token, id)
            .then(data => {
                console.log(data)
                if (data.status) {
                    setMsg(data.msg)
                    // history.push('/profile')
                } else {
                    // history.push(`/villa/${id}`)
                    setMsg('Error validation - name or region please enter only english letter with spase')
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
    }
    const bookingHandler = (e) => {
        e.preventDefault()
        setViewBookings(!viewBookings)
    }
if (imageUrl===null){
    return <SpinnerDetail />
}
    return (

        <section>
            <h2 className="header">Edit existing Villa</h2>
            <div >
                <Form onSubmit={editHandler}>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Property name</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='name' value={name || ''} onChange={(e) => setName(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Region</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='region' value={region || ''} onChange={(e) => setRegion(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Chek-in</Form.Label>
                        <Col sm="4">
                            <Form.Control type="date" name='date' value={date || ''} onChange={(e) => setDate(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Beds</Form.Label>
                        <Col sm="2">
                            <Form.Control type="number" name='beds' value={beds || ''} onChange={(e) => setBeds(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Nights</Form.Label>
                        <Col sm="2">
                            <Form.Control type="number" name='nights' value={nights || ''} onChange={(e) => setNights(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Price</Form.Label>
                        <Col sm="2">
                            <Form.Control type="number" name='price' value={price || ''} onChange={(e) => setPrice(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Price description</Form.Label>
                        <Col sm="8">
                            <Form.Control as="textarea" rows="3" name='priceDescription' value={priceDescription || ''} onChange={(e) => setPriceDescription(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="8">
                            <Form.Control as="textarea" rows="7" name='description' value={description || ''} onChange={(e) => setDescription(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Image Url 1</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='imageUrl' value={imageUrl || ''} onChange={(e) => setImageUrl(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Image Url 2</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='imageUrl2' value={imageUrl2 || ''} onChange={(e) => setImageUrl2(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Image Url 3</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='imageUrl3' value={imageUrl3 || ''} onChange={(e) => setImageUrl3(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Latitude</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='lat' value={coordinates.lat || ''} onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value || '' })} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Longitude</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='lng' value={coordinates.lng || ''} onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value || '' })} />
                        </Col>
                    </Form.Group>
                    {!!msg && <Alert variant="danger">{msg}</Alert>}
                    <div className="header"><Button variant="primary" type="submit" disabled={clientsNames.length > 0} >Edit property</Button></div>

                </Form>
                <br />
                <Card>
                    <Card.Header className="text-center">
                        <h5>view bookings attached to this offer</h5>  {'            '}
                        <Button onClick={bookingHandler} disabled={clientsNames.length===0}>more ..</Button>
                    </Card.Header>
                    <ListGroup variant="flush">
                        {viewBookings && clientsNames.length !== 0 && clientsNames
                            .map((client, id) => {
                                // return <div key={id}>{client}</div>
                                return <ListGroup.Item key={id}><InputGroup className="mb-3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>First and last name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl name="firstName" value={client.split(" ")[0]} disabled />
                                    <FormControl name="secondName" value={client.split(" ")[1]} disabled />
                                </InputGroup >
                                </ListGroup.Item>
                            })
                        }
                
                    </ListGroup >
                    <ListGroup>
                        {viewBookings && comments.length !== 0 &&
                            <Card.Header>
                                <h6>comments to this booking </h6>
                            </Card.Header>}
                        {viewBookings && comments.length !== 0 && comments.map((comment, id) => {
                            return <ListGroup.Item key={id}>{comment}</ListGroup.Item>
                        })}

                        {viewBookings && !clientsNames.length === 0 &&
                            <ListGroup.Item>there is no booking till now</ListGroup.Item>
                        }

                    </ListGroup>
                    <ListGroup className="text-center">
                        <Card.Header><h6>delete your property</h6></Card.Header>
                        <ListGroup.Item >
                            <Button variant="danger" onClick={deleteHandler} >Delete </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </section>
    )
}
export default EditVilla