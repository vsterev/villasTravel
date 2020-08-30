/* global google */
import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
    const [curentLocation, setCurentLocation] = useState({ lat: '', lng: '' })
    const MarkersList = props => {
        const { locationDisplay, ...markerProps } = props;
        return (
            <span>
                {locationDisplay.lat && locationDisplay.lng && <Marker
                    {...markerProps}
                    position={{ lat: locationDisplay.lat(), lng: locationDisplay.lng() }}
                /> }
            </span>
        );
    };

    const handleMapClick = (ref, map, ev) => {
        const location = ev.latLng;
        const coordinate = { lat: ev.latLng.lat(), lng: ev.latLng.lng() }
        props.action(coordinate)
        setCurentLocation(location)
        map.panTo(location);
    };

    return (
        <div className="map-container">
            <Map
                google={props.google}
                className={"map"}
                zoom={props.zoom}
                initialCenter={props.center}
                onClick={handleMapClick}
            >
                <MarkersList locationDisplay={curentLocation} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAly0ITa9Bt9omdeaKO4VZRueW_3N6fwhw",
    libraries: []
})(MapContainer);