import React, { useState } from 'react'
import Map from '../../shared/googleMapAdd'
const TestPage = () => {
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [coordinate, setCoordinate] = useState({ lat: null, lng: null })
    const getCoordinates = () => {
        return v => {
            setCoordinate(v)
        }
    }
    return (
        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
            <h3>lantitude:{!!coordinate.lat && coordinate.lat}</h3>
            <h3>lontitude: {!!coordinate.lng && coordinate.lng}</h3>
            <Map center={{ lat: 42.884301, lng: 23.164285 }} action={getCoordinates()} zoom={5} />

        </div>
    )
}
export default TestPage