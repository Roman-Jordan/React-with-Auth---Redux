import {axiosWithAuth} from '../../../util/axiosWithAuth';

export const LOADING_USERS = 'LOADING_USERS';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERRORS = 'USERS_ERRORS';

export const getUsers = () => (dispatch) => {
  axiosWithAuth()
      .get('/users')
      .then((res) => {
        dispatch({type: USERS_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        dispatch({type: USERS_SUCCESS, payload: err.response.data});
      });
};
