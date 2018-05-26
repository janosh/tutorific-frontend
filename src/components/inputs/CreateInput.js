import React from 'react';

const CreateInput = (renderInput) => ({input, label, meta, ...rest}) => {
  return <div>
    {label && <label htmlFor={input.name}>{label}</label>}
    {renderInput(input, rest)}
    {meta.error && meta.touched && !meta.active && <span className="form-error">{meta.error}</span>}
  </div>
};

export default CreateInput;