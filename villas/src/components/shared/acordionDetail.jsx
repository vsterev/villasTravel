import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
const AccorionDetail = ({ title, text }) => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{text}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default AccorionDetail
