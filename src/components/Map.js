import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import config from '../config';
import './Map.css';

class Map extends React.Component {

  render() {
    const {lng: userLng, lat: userLat} = this.props.userLocationChoice.location || this.props.userLocation;
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{key: config.googleMapsApiKey}}
          center={{lat: userLat || 50, lng: userLng || 10}}
          zoom={userLng ? 12 : 4}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.currentUser.location,
    userLocationChoice: state.currentUser.locationChoice,
  };
};

export default connect(mapStateToProps)(Map);