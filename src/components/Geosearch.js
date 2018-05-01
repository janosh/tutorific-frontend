import React from 'react';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';
import {withRouter} from 'react-router-dom';

import {setUserLocation, setLocationChoice} from '../actions';
import './Geosearch.css';

class Geosearch extends React.Component {

  getUserLocation() {
    if (!this.props.userLocation.lat && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(postition => {
        const {latitude: lat, longitude: lng} = postition.coords;
        this.props.setUserLocation({lat, lng});
      })
    }
  }

  handleSelection = (data) => {
    if (!data || !data.gmaps) return;
    if (this.props.history.location.pathname === '/')
      this.props.history.push('/connect');
    this.props.setLocationChoice({
      label: data.label,
      placeId: data.placeId,
      location: data.location,
      components: data.gmaps.address_components,
    })
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    return (
      <Geosuggest
        placeholder={this.props.placeholder || 'Choose location'}
        onSuggestSelect={this.handleSelection}
      />);
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.currentUser.userLocation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserLocation: (userLocation) => dispatch(setUserLocation(userLocation)),
  setLocationChoice: (locationChoice) => dispatch(setLocationChoice(ownProps.storePrefix, locationChoice))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Geosearch));