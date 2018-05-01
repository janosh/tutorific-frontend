import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import config from '../config';
import './Map.css';

const Marker = ({ text }) => <div className="marker">{text}</div>;

class Map extends React.Component {

  render() {
    const {userLocation, userLocationChoice, personList} = this.props;
    const {lng: userLng, lat: userLat} = (userLocationChoice && userLocationChoice.location) || userLocation;
    return (
      <div className="map-container">
        <GoogleMapReact
          className="map"
          bootstrapURLKeys={{key: config.googleMapsApiKey}}
          center={{lat: userLat || 50, lng: userLng || 10}}
          zoom={userLng ? 12 : 4}
        >
          {personList && personList.map(person =>
            <Marker key={person._id}
            lat={person.address.location.lat}
            lng={person.address.location.lng}
            text={person.firstname}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.currentUser.userLocation,
    userLocationChoice: state.filters.locationChoice,
    personList: state.personList,
  };
};

export default connect(mapStateToProps)(Map);