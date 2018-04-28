import React from 'react';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';

import {setUserLocation, setLocationChoice} from '../actions';
import './Geosearch.css';

class Geosearch extends React.Component {

  selectedLocationToStore = (data) => {
    if (!data || !data.gmaps || !data.gmaps.geometry) return;
    this.props.setLocationChoice({
      label: data.label,
      placeId: data.placeId,
      location: data.location,
      components: data.gmaps.address_components,
      bounds: data.gmaps.geometry.bounds,
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
        placeholder={this.props.placeholder || 'Choose location'}
        onSuggestSelect={this.selectedLocationToStore}
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.currentUser.location,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserLocation: (userLocation) => dispatch(setUserLocation(userLocation)),
  setLocationChoice: (locationChoice) => dispatch(setLocationChoice(ownProps.storePrefix, locationChoice))
});

export default connect(mapStateToProps, mapDispatchToProps)(Geosearch);