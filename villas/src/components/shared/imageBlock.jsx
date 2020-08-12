import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
const ImageBlock = ({ img1, img2, img3 }) => {
return <Container className="text-center">
<Row>
    <Col xs={6} md={4}>
        <Image src={img1} rounded width="350"/>
    </Col> 
    <Col xs={6} md={4}>
        <Image src={img2} rounded width="350" />
    </Col>
    <Col xs={6} md={4}>
        <Image src={img3} rounded width="350"/>
    </Col>
</Row>
</Container>
}
export default ImageBlock