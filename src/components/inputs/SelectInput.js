import React from 'react';

import CreateInput from './CreateInput';

const SelectInput = CreateInput((input, {children}) =>
  <select {...input}>
    {children}
  </select>
)

export default SelectInput;