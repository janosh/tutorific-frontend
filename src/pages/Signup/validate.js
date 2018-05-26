import validator from 'validator';

export const subjects = [
  'Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
  'English', 'Spanish', 'French', 'German', 'Italian', 'Chinese',
  'Japanese', 'Latin', 'History', 'Politics', 'Ethics', 'Social Studies',
  'Philosophy', 'Economics', 'Physical Education', 'Music', 'Art'
];

export const schools = [
  'Elementary', 'Middle', 'High', 'Special Needs', 'Vocational', 'Refugee'
];

const validate = (values) => {
  const errors = {address: {}};
  // account
  if (!values.firstName) errors.firstName = 'Required';
  if (!values.lastName) errors.lastName = 'Required';
  if (!values.email) errors.email = 'Required';
  else if (!validator.isEmail(values.email)) errors.email = 'Invalid email';
  if (values.phone && !validator.isMobilePhone(values.phone, 'any', {strictMode: true}))
    errors.phone = 'Invalid: Supply full country code, e.g. +49 for Germany followed by a space';
  // password
  if (!values.password) errors.password = 'Required';
  else if (values.password.length < 6) errors.password = 'Password must be at least 6 characters long';
  else if (values.password.search(/[a-z]/) < 0) errors.password = 'Password must contain a lowercase character';
  else if(values.password.search(/[A-Z]/) < 0) errors.password = 'Password must contain an uppercase character';
  else if (values.password.search(/[0-9]/) < 0) errors.password = 'Password must contain a number';
  if (!values.confirmPassword) errors.confirmPassword = 'Required';
  else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Passwords do not match';
  // address
  if (values.address) {
    if (!values.address.street) errors.address.street = 'Required';
    if (!values.address.zipCode) errors.address.zipCode = 'Required';
    if (!values.address.city) errors.address.city = 'Required';
  }
  // personal
  if (!values.gender) errors.gender = 'Required';
  if (!values.subjects || !values.subjects.length) {
    errors.subjects = {_error: 'Enter at least one subject'}
  } else {
    const subjectErrors = values.subjects.map(el => (subjects.includes(el) || el === '') ? '' : 'Invalid subject')
    if(subjectErrors.reduce((a,b) => a + b, '') !== '') errors.subjects = subjectErrors;
  }
  return errors;
};

export default validate;