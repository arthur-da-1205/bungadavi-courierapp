import axios from 'axios';

import {API_HOST} from '../../config';
import {toastMessage} from '../../utils';
import {storeData} from '../../utils/storage';
import {setLoading} from './global';

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  API_HOST.post('/login', form)
    .then(res => {
      dispatch(setLoading(false));
      const token = res.data.token;
      const profile = {
        id: res.data.data[0].id,
        fullName: res.data.data[0].fullname,
        username: res.data.data[0].username,
        uuid: res.data.data[0].uuid,
        email: res.data.data[0].email,
        mobilePhone: res.data.data[0].mobile,
        point: res.data.data[0].point,
        photo: res.data.data[0].photo,
      };

      storeData('TOKEN', {value: token});
      storeData('USER_PROFILE', profile);

      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log(err);
    });
};

export const resetPasswordAction = () => {};
