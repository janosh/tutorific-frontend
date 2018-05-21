import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import Marker from './Marker';
import {setSinglePersonView} from '../redux/actions';

import './Map.css';

class Map extends React.Component {

  render() {
    const {userLocation, location, personList, setSinglePersonView} = this.props;
    const {lng: userLng, lat: userLat} = location.lng ? location : userLocation;
    return (
      <div className="map-container">
        <GoogleMapReact
          className="map"
          bootstrapURLKeys={{key: process.env.REACT_APP_GMAPS_API_KEY}}
          center={{lat: userLat || 50, lng: userLng || 10}}
          zoom={userLng ? 12 : 4}
        >
          {personList && personList.map(person => {
            const [lng, lat] = person.location.coordinates;
            return <Marker key={person._id}
            lng={lng} lat={lat}
            text={`${person.firstName} ${person.lastName}`}
            person={person}
            setSinglePersonView={setSinglePersonView}
            />
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.filters.userLocation,
    location: state.filters.location,
    personList: state.personList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSinglePersonView: (person) => dispatch(setSinglePersonView(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);