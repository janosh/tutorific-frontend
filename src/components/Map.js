import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import config from '../config';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '400px',
      height: '300px'
    }
    return (
      <Map style={style} google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (config.googleMapsApiKey)
})(MapContainer)