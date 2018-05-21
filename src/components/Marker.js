import React from 'react';

import './Marker.css'

const Marker = ({ text, person, setSinglePersonView }) => (
  <div onClick={() => setSinglePersonView(person)} className="marker">
    {text}
  </div>
);

export default Marker;