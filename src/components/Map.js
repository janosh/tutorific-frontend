import React from 'react';
import {connect} from 'react-redux';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import './Map.css';
import config from '../config';

const ComposedMap = withScriptjs(withGoogleMap(props => {
  const {longitude: userLng, latitude: userLat} = props.userLocation;
  return <GoogleMap
    center={{lat: userLat || 50, lng: userLng || 10}}
    zoom={userLat ? 10 : 4}
  >
    {userLat && <Marker
      label="You"
      position={{lat: userLat, lng: userLng}}
    />}
  </GoogleMap>
}));

class Map extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <ComposedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div/>}
        containerElement={<div className="map-container"/>}
        mapElement={<div className="map"/>}
        userLocation={this.props.userLocation}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.user.location
  };
};

export default connect(mapStateToProps)(Map);