import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import villaService from '../../services/villaService'
import reservationService from '../../services/reservationService'
import parseCookie from '../../utils/parseCookie'
import {  Col, Form, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap'
import './style.css'
const BookVilla = () => {
    const [villaName, setVillaName] = useState('')
    const [region, setRegion] = useState('')
    const [date, setDate] = useState('')
    const [beds, setBeds] = useState(0)
    const [nights, setNights] = useState('0')
    const [price, setPrice] = useState('0')
    const [priceDescription, setPriceDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    // const [msg, setMsg] = useState('')
    const [isAgree, setIsAgree] = useState(false)
    const params = useParams();
    const history = useHistory()
    const villaId = params.id
    const token = parseCookie('x-auth-token')
    useEffect(() => {
        villaService.villaDetails(villaId, token)
            .then(data => {
                // if (!data.status) {
                //     setMsg('Eroor finding this villa')
                // }
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
    }, [villaId, token])
    const renderNames = () => {
        let i
        let t = [];
        for (i = 0; i < beds; i++) {

            t.push(
                // <div key={i}><label>tourist {i + 1}: <input type="text" name={`client${i + 1}`} placeholder="name surname" /></label></div>


                <InputGroup key={i} className="mb-3" >
                    <InputGroup.Prepend>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name={`client${i + 1}first`} />
                    <FormControl name={`client${i + 1}second`} />
                </InputGroup >

            )

        }
        t.push(
            // <div key={beds}><label>comment: <textarea cols="65" rows="5" name="comment" placeholder="type your comments here" /></label></div>
            <InputGroup key={i}>
            <InputGroup.Prepend>
              <InputGroup.Text>Comment</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" name="comment" placeholder="type your comments here - optional"/>
          </InputGroup>
            )
        return t;
    }
    // const renderNames = () => {
    //     let i
    //     let t = [];
    //     for (i = 0; i < beds; i++) {
    //         t.push(<div key={i}><label>tourist {i + 1}: <input type="text" name={`client${i + 1}`} placeholder="name surname" /></label></div>)
    //     }
    //     t.push(<div key={beds}><label>comment: <textarea cols="65" rows="5" name="comment" placeholder="type your comments here" /></label></div>)
    //     return t;
    // }
    const reservationHandler = (e) => {
        e.preventDefault()
        const clients = [];
        let i;
        let currValue = ''
        for (i = 0; i < beds; i++) {
            const currFirst = e.target[`client${i + 1}first`].value
            const currSecond = e.target[`client${i + 1}second`].value
            currValue = `${currFirst} ${currSecond}`
            clients.push(currValue)
        }
        const comment = e.target.comment.value
        const dataParams = { clients, villaId, comment }
        // console.log(dataParams)
        reservationService.createReservation(dataParams, token) 
            .then(data => {
                if (!data.status) {
                    // setMsg(data.msg)
                    return
                }
                history.push('/profile')
            })
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <br />
            <h2 className="header">Book - {villaName} in {region}</h2>
            <Row>
                <Col>
                </Col>
                <Col className="justify-content-md-center">
                    <br />
                    <div><img src={imageUrl} width="650" alt={villaName} /></div>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col className="justify-content-md-center">
                    <br />
                    <div>date chek-in: {date} for {nights} nights</div>
                    <div>maximum person: {beds}</div>
                    <div>price: <b>{price}</b> EUR</div>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <br />
                    <Form>
                        <Form.Group>
                            <Form.Label><i>price terms & conditions:</i></Form.Label>
                            <Form.Control as="textarea" name='priceDescription' value={priceDescription} disabled rows={6} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>


            <div className="names">
                <div><label><input type="checkbox" checked={isAgree} onChange={() => setIsAgree(!isAgree)} id="checkbox" name="checkbox" />{' '}confirm price policy</label></div>

                <form onSubmit={reservationHandler}>
                    {isAgree && renderNames()}
                    <div>
                        <br />
                        <Button disabled={!isAgree} type="submit" >Book it</Button>
                    </div>
                </form>
            </div>
        </Container >
    )
}
export default BookVilla