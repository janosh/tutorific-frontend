import React from 'react';
import Geosuggest from 'react-geosuggest';

const handleSelection = (input) => (select) => {
  if (!select || !select.location) return;
  input.onChange({
    label: select.label,
    placeId: select.placeId,
    lat: select.location.lat,
    lng: select.location.lng,
  })
};

const Geosearch = (props) => {
  const {input, label, ...rest} = props;
  return <div>
    <label htmlFor={input.name}>{label}</label>
    <Geosuggest
      id={input.name}
      initialValue={input.value.label}
      onSuggestSelect={handleSelection(input)}
      {...rest}
    />
  </div>
};

export default Geosearch;