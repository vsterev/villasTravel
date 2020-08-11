import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
const Component = ({ title, text, subtitle }) => {
    return (
        <Jumbotron>
            <Container>
            <h2>{title}</h2>
            <p>{text}</p>
                <p>{subtitle}</p>
            </Container>
        </Jumbotron>
    )
}
export default Component
