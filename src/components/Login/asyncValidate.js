import {getPersonList} from '../../redux/actions';

const asyncValidate = (values, dispatch) => new Promise((resolve, reject) => {
  dispatch(getPersonList(
    {email: values.email, command: 'count'},
    (count) => typeof count === 'number'
      && count === 0
      && reject({email: 'No user with that email'}),
  ));
});

export default asyncValidate;