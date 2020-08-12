import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import './style.css'
import { Form, Row, Col, Alert, Button, InputGroup, FormControl, Card, ListGroup } from 'react-bootstrap'
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
    const [viewBookings, setViewBookings] = useState(false)
    const [msg, setMsg] = useState('')
    const [clientsNames, setClientsNames] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        villaService.villaDetails(id, token)
            .then(res => {

                if (!!res.status) {
                    const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, reservationId } = res.villa
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
                    setClientsNames(reservationId.clients)
                    setComments(reservationId.comments)
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
    const bookingHandler = (e) => {
        e.preventDefault()
        setViewBookings(!viewBookings)
    }

    return (
        // <div>
        //     <h2> Edit existing Villa </h2>
        //     <form onSubmit={editHandler}>
        //         <div>
        //             <label htmlFor="name">property name: </label>
        //             <input type="text" name='name' value={name || ''} onChange={(e) => setName(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="region">region : </label>
        //             <input type="text" name='region' value={region || ''} onChange={(e) => setRegion(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="date">date : </label>
        //             <input type="date" name='date' value={date || ''} onChange={(e) => setDate(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="beds">number of beds : </label>
        //             <input type="number" name='beds' value={beds || ''} onChange={(e) => setBeds(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="nights">number of nights : </label>
        //             <input type="number" name='nights' value={nights || ''} onChange={(e) => setNights(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="price"> price per stay : </label>
        //             <input type="text" name='price' value={price || ''} onChange={(e) => setPrice(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="priceDescription"> price description  : </label>
        //             <input type="text" name='priceDescription' value={priceDescription || ''} onChange={(e) => setPriceDescription(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="description"> description  : </label>
        //             <input type="text" name='description' value={description || ''} onChange={(e) => setDescription(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="imageUrl"> image 1  : </label>
        //             <input type="text" name='imageUrl' value={imageUrl || ''} onChange={(e) => setImageUrl(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="imageUrl2"> image 2  : </label>
        //             <input type="text" name='imageUrl2' value={imageUrl2 || ''} onChange={(e) => setImageUrl2(e.target.value)} />
        //         </div>
        //         <div>
        //             <label htmlFor="imageUrl3"> image 3  : </label>
        //             <input type="text" name='imageUrl3' value={imageUrl3 || ''} onChange={(e) => setImageUrl3(e.target.value)} />
        //         </div>
        //         {!!msg && <div>{msg}</div>}
        //         <div>
        //             <button type="submit">Confirm editing</button>
        //         </div>
        //         <div><h4>View bookings attached to this offer</h4><button onClick={bookingHandler}>Bookings</button> </div>
        //         {viewBookings && <h5>Names of clients</h5>}
        //         {viewBookings && clientsNames.length !== 0 && clientsNames.map((client, id) => { return <div key={id}>{client}</div> })}
        //         {viewBookings && !clientsNames.length !==0 && <h5>Comment to this booking </h5>}
        //         {viewBookings && comments.length !== 0 && comments.map((comment, id) => { return <div key={id}>{comment}</div> })}
        //         {viewBookings && !clientsNames.length ===0 && <div>there is no booking till now</div>}
        //         <div><h4>Delete this villa</h4><button onClick={deleteHandler}>Delete </button></div>
        //     </form>
        <section>
            <h2 className="header">Edit existing Villa</h2>
            <div >
                <Form onSubmit={editHandler}>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Property name</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name='name' name='name' value={name || ''} onChange={(e) => setName(e.target.value)} />
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
                    {!!msg && <Alert variant="danger">{msg}</Alert>}
                    <div className="header"><Button variant="primary" type="submit" >Edit property</Button></div>

                </Form>
                <br />
                <Card>
                    <Card.Header className="text-center">
                        <h5>view bookings attached to this offer</h5>  {'            '}<Button onClick={bookingHandler}>more ..</Button>
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
                        {/* 
                        {reservations.length !== 0 && reservations.map((reservation, id) => {
                            return <ListGroup.Item key={id}><Row ><Col >{reservation.villaId.name}</Col><Col>{reservation.villaId.date}</Col><Col>{reservation.villaId.nights}</Col><Col><Button onClick={() => history.push(`/villa/book/details/${reservation._id}`)}>more info</Button></Col></Row></ListGroup.Item >
                        })}
                        {reservations.length === 0 && <h3> You don't have any bookings in the system!</h3>} */}
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
                {/* <div className="header"><h4>Delete this villa</h4><Button variant="danger" onClick={deleteHandler}>Delete </Button></div> */}

            </div>
        </section>
    )
}
export default EditVilla