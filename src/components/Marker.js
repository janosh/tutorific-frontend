import React from 'react';

const Marker = ({ text, person, setSinglePersonView }) => (
  <div onClick={() => setSinglePersonView(person)} className="marker">
    {text}
  </div>
);

export default Marker;