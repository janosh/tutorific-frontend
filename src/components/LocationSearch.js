import React from 'react';
import {connect} from 'react-redux';
import {withScriptjs} from 'react-google-maps';
import {StandaloneSearchBox} from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import {setUserLocation, setUserLocationChoice} from '../actions';
import config from '../config';

const ComposedLocationSearch = withScriptjs(props =>
  <StandaloneSearchBox
    ref={props.onSearchBoxMounted}
    className="location-search"
    bounds={props.bounds}
    onPlacesChanged={props.onPlacesChanged}
  >
    <input name="userLocationChoice" onChange={props.onChange} placeholder="Choose location"/>
  </StandaloneSearchBox>
);

class LocationSearch extends React.PureComponent {

  update = async (e) => {
    await this.props.setUserLocationChoice(e.target.value);
  }

  componentDidMount() {
    if (!this.props.userLocation.latitude && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(postition => {
        const {latitude, longitude} = postition.coords;
        this.props.setUserLocation({latitude, longitude});
      })
    }
  }

  render() {
    return (
      <ComposedLocationSearch
        onChange={this.update}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div/>}
      />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);