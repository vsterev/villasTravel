import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthConext from '../../utils/context'
import reservationService from '../../services/reservationService'
import userService from '../../services/userService'
import villaService from '../../services/villaService'
import parseCookie from '../../utils/parseCookie'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import banner from './banner.gif'
import CardDetail from '../shared/card'
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

    }, [])
    const changeNameHandler = () => {
        console.log(newName)
        console.log(token)
        userService.nameChange({ name: newName }, token)
            .then(() => {
                console.log()
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
                                    <Card.Body>
                                        <Card.Title>Administration tools</Card.Title>
                                        <Card.Text>
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
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>your own properties in the system:</Card.Title>
                                        <Card.Text>
                                            <div>
                                                {villas.length !== 0 && villas.map((villa, id) => {
                                                    return <p><Row key={villa._id}><Col xs={4}>name: {villa.name} in {villa.region}: </Col><Col><Button onClick={() => history.push(`/villa/edit/${villa._id}`)}>more info </Button></Col></Row></p>
                                                })}
                                                {villas.length === 0 && <h4> You don't have added your own villas!</h4>}
                                            </div>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            your booked holidays in the system:
                                        </Card.Header>
                                        <Card.Text>
                                            {reservations.length !== 0 && reservations.map((reservation, id) => {
                                                return <p><Row key={reservation._id}><Col xs={4}>name: {reservation.villaId.name}: </Col><Col><Button onClick={() => history.push(`/villa/book/details/${reservation._id}`)}>more info</Button></Col></Row></p>
                                            })}
                                            {reservations.length === 0 && <h3> You don't have any bookings in the system!</h3>}
                                        </Card.Text>
                                    </Card.Body>
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
