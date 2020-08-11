import React from 'react'
import { CardColumns, CardGroup, CardDeck, Row } from 'react-bootstrap'
const renderCards = ({ villas, Component }) => {
    return (
        <Row>
            <CardColumns>
                {villas.map((villa, id) => {
                    return <Component key={id} id={villa._id} name={villa.name} region={villa.region} date={villa.date} price={villa.price} likes={villa.likes.length} isBooked={!!villa.reservationId ? 'sold out' : 'available'} image={villa.imageUrl} />
                })}
            </CardColumns>
        </Row>
    )
}
export default renderCards