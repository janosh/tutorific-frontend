import React from 'react';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';
import {withRouter} from 'react-router-dom';

import {setUserLocation, setLocation} from '../../redux/actions';
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
    if (!data || !data.location) return;
    if (this.props.history.location.pathname === '/')
      this.props.history.push('/connect');
    this.props.setLocation({
      label: data.label,
      placeId: data.placeId,
      lat: data.location.lat,
      lng: data.location.lng,
    })
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    return (
      <Geosuggest
        initialValue={this.props.locationChoice.label}
        queryDelay={50}
        placeholder={this.props.placeholder || 'Choose location'}
        onSuggestSelect={this.handleSelection}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userLocation: state.currentUser.userLocation,
    locationChoice: state[ownProps.storePrefix].location,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserLocation: (userLocation) => dispatch(setUserLocation(userLocation)),
  setLocation: (location) => dispatch(setLocation(ownProps.storePrefix, location))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Geosearch));