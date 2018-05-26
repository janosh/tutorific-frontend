import React from 'react';
import {Field} from 'redux-form';

import TextInput from './TextInput';
import * as normalize from './normalize';

const Address = ({placeholders}) => (
  <React.Fragment>
    <Field
      name="street"
      component={TextInput}
      label="Street"
      placeholder={placeholders ? 'Infinite Loop 1' : null}
    />
    <Field
      name="supplement"
      component={TextInput}
      label="Supplement"
      placeholder={placeholders ? 'Appartment 13' : null}
    />
    <Field
      name="zipCode"
      component={TextInput}
      label="Zip Code"
      placeholder={placeholders ? '12345' : null}
      normalize={normalize.zip}
    />
    <Field
      name="city"
      component={TextInput}
      label="City"
      placeholder={placeholders ? 'Paradise City' : null}
    />
  </React.Fragment>
);

export default Address;