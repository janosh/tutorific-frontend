import {getPersonList} from '../../redux/actions';

const asyncValidate = (values, dispatch) => new Promise((resolve, reject) => {
  dispatch(getPersonList(
    {email: values.email},
    (data) => data.length && reject({email: 'That email is taken'}),
  ));
});

export default asyncValidate;