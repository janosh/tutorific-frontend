import React from 'react';

const TextInput = ({input, label, meta: {active, touched, error, warning}, ...rest}) => {
  return <div>
    <label htmlFor={input.name}>{label}</label>
    <input id={input.name} {...input} {...rest}/>
    {error && touched && !active && <span className="error">{error}</span>}
  </div>
};

export default TextInput;