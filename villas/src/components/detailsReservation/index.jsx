import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import reservationService from '../../services/reservationService'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import AuthContext from '../../utils/context'
import { ListGroup, InputGroup, FormControl, Card, Col, Image, Row, Container } from 'react-bootstrap'
import AccordionDetail from '../shared/acordionDetail'
import ImageBlock from '../shared/imageBlock'

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
    const [clients, setClients] = useState([])
    const [comments, setComments] = useState([])
    const [isBooked, setIsBooked] = useState(false) //
    const [msg, setMsg] = useState('')
    const history = useHistory();

    const villaId = params.id
    // console.log(villaId)
    const token = parseCookie('x-auth-token')
    useEffect(() => {
        reservationService.reservationDetails(token, villaId)
            .then(data => {
                if (!data.status) {
                    setMsg('Eroor finding this villa')
                }
                console.log(data)
                const { name, region, date, beds, nights, price, priceDescription, description, imageUrl, imageUrl2, imageUrl3, likes, reservationId } = data.reservation.villaId
                const { clients, comments } = data.reservation
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
                setComments(comments)
                setClients(clients)
            })
            .catch(err => console.log(err))
        // return function () {
        //     setLikes([])
        // }
    }, [])
    // const isBooked = reservationId ? !!reservationId : false
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

    return (
        <div>
            <h2 className="header">Reservation Details</h2>

            <Card>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Dates</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={`from: ${date} for ${nights} nights`} disabled />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Property</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={`${villaName} in ${region}`} disabled />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Price for stay</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={`${price} EUR`} disabled />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">maximum accomodation</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={`${beds} tourists`} disabled />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>price terms & policy</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" value={priceDescription} disabled />
                </InputGroup>
            </Card>

            <Card>
                <Card.Header className="text-center">
                    <h6>Tourists </h6>
                </Card.Header>
                <ListGroup variant="flush">
                    {clients.map((client, id) => {
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
                </ListGroup>
            </Card>
            <Card>
                <Card.Header >
                    <h6>Comments</h6>
                </Card.Header>
                <ListGroup variant="flush">
                    {comments.length === 0 &&
                        <ListGroup.Item>
                            No comments are added.
                        </ListGroup.Item>
                    }
                    {comments.length !== 0 && comments.map((comment, id) => {
                        return <ListGroup.Item key={id}>
                            comment {id + 1}: {comment}
                        </ListGroup.Item>
                    })
                    }
                </ListGroup>
            </Card>
            <AccordionDetail title={'property description'} text={description}></AccordionDetail>

            <br />
            <ImageBlock img1={imageUrl} img2={imageUrl2} img3={imageUrl3} />

            {!!msg && <div>{msg}</div>}
        </div>
    )
}
export default VillaDetail