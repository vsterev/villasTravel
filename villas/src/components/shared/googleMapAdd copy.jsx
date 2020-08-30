/* global google */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MarkersList = props => {
    const { locations, ...markerProps } = props;
    return (
        <span>
            {locations.map((location, i) => {
                return (
                    <Marker
                        key={i}
                        {...markerProps}
                        position={{ lat: location.lat(), lng: location.lng() }}
                    />
                );
            })}
        </span>
    );
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleMapClick = (ref, map, ev) => {
        const location = ev.latLng;
        console.log({lat: ev.latLng.lat('_.I'), lng: ev.latLng.lng('_.I') } )
        this.setState(prevState => ({
            locations: [...prevState.locations, location]
        }));
        map.panTo(location);
    };

    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    className={"map"}
                    // zoom={5}
                      zoom={this.props.zoom}
                    // initialCenter={{ lat: 42.884301, lng: 23.164285 }}
                      initialCenter={this.props.center}
                    onClick={this.handleMapClick}
                >
                    <MarkersList locations={this.state.locations} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAly0ITa9Bt9omdeaKO4VZRueW_3N6fwhw",
    libraries: []
})(MapContainer);