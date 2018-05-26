import React from 'react';
import {Field} from 'redux-form';

import TextInput from './TextInput';

const TextInputArray = ({label, fields, list, placeholder}) => {
  if (!fields.length) fields.push();
  return fields.map((el, index) =>
    <Field key={el} name={el} component={TextInput}
      placeholder={placeholder && placeholder[index]}
      label={`${label} ${index + 1}`} list={list}
      onClick={e => index === fields.length - 1 && fields.push('')}
      onBlur={e => !e.target.value && fields.remove(fields.length - 1)}
    />
  );
};

export default TextInputArray;