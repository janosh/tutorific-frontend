import validator from 'validator';

const atLeastOneLowerUpperAndDigit = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const validate = (values) => {
  const errors = {};
  if (!values.email) errors.email = 'Required';
  else if (!validator.isEmail(values.email)) errors.email = 'Invalid email';
  if (!values.password) errors.password = 'Required';
  if (!atLeastOneLowerUpperAndDigit.test(values.password))
    errors.password = 'Invalid password';
  return errors;
};

export default validate;

export const shouldValidate = ({props}) => Boolean(props.submitting);