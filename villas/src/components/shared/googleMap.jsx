import React, { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '400px'
}


const MapContainer = (props) => {
    console.log(props)
    const [showingInfoWindow, setShowingInfoWindow] = useState(false)
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (props, marker, e) => {
        console.log(props)
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }

    const onClose = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    }
    return (
        <Map
            google={props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
                lat: props.coordinates.lat,
                lng: props.coordinates.lng
            }}
        >
            <Marker
                onClick={onMarkerClick}
                name={props.name}
            />
            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
                onClose={onClose}
            >
                <div>
                    <h4>{selectedPlace.name}</h4>
                </div>
            </InfoWindow>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAly0ITa9Bt9omdeaKO4VZRueW_3N6fwhw'
})(MapContainer);