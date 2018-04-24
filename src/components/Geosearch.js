import React from 'react';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';

import {setUserLocation, setUserLocationChoice} from '../actions';
import './Geosearch.css';

class Geosearch extends React.Component {

  selectedLocationToStore = (data) => {
    this.props.setUserLocationChoice({
      label: data.label,
      placeId: data.placeId,
      location: data.location,
    })
  }

  componentDidMount() {
    if (!this.props.userLocation.lat && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(postition => {
        const {latitude: lat, longitude: lng} = postition.coords;
        this.props.setUserLocation({lat, lng});
      })
    }
  }

  render() {
    return (
      <Geosuggest
        placeholder="Choose location"
        onSuggestSelect={this.selectedLocationToStore}
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.user.location,
    userLocationChoice: state.user.locationChoice
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserLocation: (userLocation) => dispatch(setUserLocation(userLocation)),
  setUserLocationChoice: (userLocationChoice) => dispatch(setUserLocationChoice(userLocationChoice))
});

export default connect(mapStateToProps, mapDispatchToProps)(Geosearch);