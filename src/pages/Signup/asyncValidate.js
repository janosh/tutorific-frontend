import {getPersonList} from '../../redux/actions';

const asyncValidate = (values, dispatch) => new Promise((resolve, reject) => {
  dispatch(getPersonList(
    {email: values.email, command: 'count'},
    (count) => typeof count === 'number' && count > 0 && reject({email: 'That email is taken'}),
  ));
});

export default asyncValidate;