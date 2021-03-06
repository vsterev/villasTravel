import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthConext from '../../utils/context'
import reservationService from '../../services/reservationService'
import userService from '../../services/userService'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import { Container, Row, Col, Button, Card, ListGroup, Badge } from 'react-bootstrap'
import banner from './banner.gif'
const Profile = () => {
    const [villas, setVillas] = useState([])
    const [reservations, setReservations] = useState([])
    const [nameChanging, setNameChanging] = useState(false)
    const [newName, setNewName] = useState('')
    const { user } = useContext(AuthConext)
    const history = useHistory();
    // const [name, setName] = useState(user.name)
    const token = parseCookie('x-auth-token')

    useEffect(() => {
        villaService.getVillasFromUser(token)
            .then(data => {
                if (!!data.status) {
                    return data.villas
                }
            })
            .then(villasUser => setVillas(villasUser))
            .catch(err => console.log(err))

        reservationService.getReservationsFromUser(token)
            .then(reservationsUser => {
                if (!!reservationsUser.status) {
                    setReservations(reservationsUser.reservations)
                }
            })
            .catch(err => console.log(err))
    }, [token])

    const changeNameHandler = () => {
        console.log(newName)
        console.log(token)
        userService.nameChange({ name: newName }, token)
            .then(() => {
                setNewName('')
                setNameChanging(false)
                window.location.reload(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className="header">Profile page</h2>
            <Container>
                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col className="text-center">
                                <Card>
                                    <Card.Header>
                                        <b>Administration tools</b>
                                    </Card.Header>
                                    <Card.Body>
                                        <div>name: <b>{user.name}</b> </div>
                                        <div>email: <b>{user.email}</b> </div>
                                        <br />
                                        <div>
                                            <Button onClick={() => history.push('/password-change')}>Password change</Button>{' '}
                                            <Button onClick={() => setNameChanging(!nameChanging)}>Name change</Button>{' '}
                                            <Button onClick={() => history.push('/add-villa')}>Add new villa</Button>
                                        </div>
                                        {!!nameChanging &&
                                            <div>
                                                <br />
                                                <input placeholder="type new name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                                                <Button type="button" onClick={changeNameHandler}>Confirm</Button>
                                            </div>
                                        }
                                        <br />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header><b>your own properties in the system:</b></Card.Header>
                                    <ListGroup variant="flush">
                                        {villas.length !== 0 && villas.map((villa, id) => {
                                            return <ListGroup.Item key={id}>
                                                <Row key={id} >
                                                    <Col>{villa.name} in {villa.region}</Col>
                                                    <Col>{villa.date}</Col>
                                                    <Col>{villa.nights}</Col>
                                                    <Col><h4>{!!villa.reservationId ? <Badge variant="danger" >booked</Badge> : <Badge variant="success" >available </Badge>}</h4></Col>
                                                    <Col><Button onClick={() => history.push(`/villa/edit/${villa._id}`)}>more info</Button></Col>
                                                </Row>
                                            </ListGroup.Item>
                                        })}
                                        {villas.length === 0 && <h4> You don't have added your own villas!</h4>}
                                    </ListGroup >
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header>
                                        <b> your booked holidays in the system:</b>
                                    </Card.Header>
                                    <ListGroup variant="flush">
                                        {reservations.length !== 0 && reservations.map((reservation, id) => {
                                            return <ListGroup.Item key={id}>
                                                <Row>
                                                    <Col>{reservation.villaId.name}</Col>
                                                    <Col>{reservation.villaId.date}</Col>
                                                    <Col>{reservation.villaId.nights}</Col>
                                                    <Col>{reservation.villaId.creatorId.email}</Col>
                                                    <Col><Button onClick={() => history.push(`/villa/book/details/${reservation._id}`)}>more info</Button></Col>
                                                </Row>
                                            </ListGroup.Item >
                                        })}
                                        {reservations.length === 0 && <h3> You don't have any bookings in the system!</h3>}
                                    </ListGroup >
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <img src={banner} alt="banner-VillasChoise" />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default Profile
