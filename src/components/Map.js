import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import config from '../config';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div/>,
    containerElement: <div style={{ flex: `1` }} />,
    mapElement: <div style={{ height: `100%`, borderRadius: `10px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

export default Map;