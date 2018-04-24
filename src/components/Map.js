import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './Map.css';
import config from '../config';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div/>,
    containerElement: <div className="map-container"/>,
    mapElement: <div className="map"/>,
    isMarkerShown: true,
  }), withScriptjs, withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

export default Map;