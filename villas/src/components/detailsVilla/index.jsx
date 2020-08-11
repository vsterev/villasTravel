import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Row, Container, Badge, Button } from 'react-bootstrap'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import AuthContext from '../../utils/context'
import CarouselDetail from '../shared/carousel'
import './style.css'

const VillaDetail = () => {
    const { user } = useContext(AuthContext)
    const params = useParams()
    const [villaName, setVillaName] = useState('')
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
    const [likes, setLikes] = useState([])
    const [isBooked, setIsBooked] = useState(false) //
    const [msg, setMsg] = useState('')
    const history = useHistory();

    const villaId = params.id

    const token = parseCookie('x-auth-token')
    useEffect(() => {
        villaService.villaDetails(villaId, token)
            .then(data => {
                if (!data.status) {
                    setMsg('Eroor finding this villa')
                }
                // console.log(data)
                const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, likes, reservationId } = data.villa
                // console.log(name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, likes, reservationId)
                setVillaName(name)
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
                setLikes(likes)
                setIsBooked(!!reservationId)
            })
            .catch(err => console.log(err))
        // return function () {
        //     setLikes([])
        // }
    }, [])
    // const isBooked = reservationId ? !!reservationId : false
    console.log(isBooked)
    // }, [villaId, likes])
    const likeHandler = (e) => {
        villaService.villaLike(token, villaId)
            .then(data => {
                console.log(data)
                window.location.reload(true)
                //da napravia vtori useEffect samo za likes za da ne prerenderira cialata stranica
            })
            .catch(err => console.log(err))
    }
    const bookHandler = (e) => {
        console.log(e.target.parent)
        // <div><input type="text"></input></div>)
    }
    return (
        <div>
            <h2 className="header">{villaName} - {region}</h2>
            <Container >
                <Row className="justify-content-md-center">
                    <Col>
                        <CarouselDetail img1={imageUrl} img2={imageUrl2} img3={imageUrl3} />
                    </Col>
                    {/* <Col><h3> {villaName} in {region}</h3></Col>
                    <Col>{isBooked ? <span color="red">offer is booked</span> : <span>offer is still available</span>}</Col> */}
                </Row>
                <Row>
                    <Col>
                        <h4>
                            <Badge variant="primary">Likes: {likes.length}</Badge>
                            {' '}
                            {isBooked ? <Badge variant="danger">booked</Badge> : <Badge variant="success">available</Badge>}
                        </h4>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {likes.includes(user.userId) ? <Button disabled>Liked</Button> : <Button onClick={likeHandler}>Like it</Button>}
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                    </Col>
                    <Col>
                        <br></br>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <h5>details & description:</h5>
                    </Col>
                    <Col>
                        <h5>availible stay:</h5>
                    </Col>

                </Row>
                <Row>
                    <Col xs={10}>
                        {description}
                    </Col>
                    <Col>
                        from {date} <br />
                        for {nights} nights
                        <br />
                        <br />
                        <h5>{price} Eur</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>price terms & conditions:</h5>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>availible stay from: {date} for {nights} nights</div>
                        <div>policy: {priceDescription}</div>
                        <div>maximum accomodation - {beds} person</div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <div>price for stay: {price} EUR</div>
                    </Col>
                    <Col>
                        {!isBooked && <Button onClick={() => history.push(`/villa/book/${villaId}`)}>Book it now</Button>}
                    </Col>
                </Row>
            </Container>
            {!!msg && <div>{msg}</div>}
        </div>
    )
}
export default VillaDetail