import React, { useState, useEffect } from 'react'
// import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import villaService from '../../services/villaService'
import Card from '../shared/card'
import RenderCards from '../shared/renderCards'
import './style.css'
const HomeNotAuth = () => {
    const [villas, setVillas] = useState([])
    const [search, setSearch] = useState('')
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const dataInput = { search, from: +from, to: +to }
    const getVillas = (info) => {
        villaService.getVillasExtended(info)
            .then(data => {
                setVillas(data.villas)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getVillas()
    }, [])
    const submitHandlerSearch = (e) => {
        e.preventDefault()
        getVillas(dataInput)
    }
    return (
        <section>
            <h2 className="header">Anti Covid Travel 2020</h2>
            <section >
                <Form onSubmit={submitHandlerSearch} >
                    <Form.Row >
                        {/* <Form.Group> */}
                        <Col sm={3} className="my-1">
                            <Form.Control type="text" placeholder="name or location" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Form.Control type="text" placeholder="price from " value={from} onChange={(e) => setFrom(e.target.value)} />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Form.Control type="text" placeholder="price to " value={to} onChange={(e) => setTo(e.target.value)} />
                        </Col>
                        {/* </Form.Group> */}
                        <Col xs="auto" className="my-1">
                            <Button variant="primary" type="submit">Search ...</Button>
                        </Col>
                    </Form.Row>

                </Form>

            </section>
            <section>
                <div className="container mt-3">
                    <div className="row">
                        <div className="justify-content-md-right">
                            <RenderCards Component={Card} villas={villas} />
                        </div>
                    </div>
                </div>
            </section>

        </section >
    )
}
export default HomeNotAuth