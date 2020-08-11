import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import AuthContext from '../../utils/context'
const CardDetail = ({ name, region, id, date, price, likes, isBooked, image }) => {
    const { loggedIn } = useContext(AuthContext)
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} width="100" height="180" />
                <Card.Body>
                    <Card.Title>{name} - {region}</Card.Title>
                    <Card.Subtitle>{price} Eur</Card.Subtitle>
                    <Card.Text>
                        from {date}
                    </Card.Text>
                    <Card.Text>
                        {isBooked}
                    </Card.Text>
                    {loggedIn ? <Button as={Link} to={`/villa/detail/${id}`} variant="primary" >more ..</Button> : <Button disabled variant="primary" >more ..</Button>}

                </Card.Body>
            </Card>
        </React.Fragment>
    )
}
export default CardDetail;
