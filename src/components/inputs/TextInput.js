import React from 'react';

import CreateInput from './CreateInput';

const TextInput = CreateInput((input, {placeholder, type, list}) => (
  <input
    id={input.name}
    {...input}
    placeholder={placeholder}
    type={type}
    list={list}
  />
));

export default TextInput;