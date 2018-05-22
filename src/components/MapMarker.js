import React from 'react';

import './MapMarker.css'

const Marker = ({ text, person, setSinglePersonView }) => (
  <div onClick={() => setSinglePersonView(person)} className="marker">
    {text}
  </div>
);

export default Marker;