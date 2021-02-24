import { axiosWithAuth } from '../../util/axiosWithAuth'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({ type: LOGOUT })
}

export const loginHandler = (user) => (dispatch) => {
  axiosWithAuth()
    .post(`/login`, { ...user })
    .then((res) => {
      return !!res.data
        ? dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token })
        : console.log(res);
    })
    .catch(err => {
      return !!err.response.data
        ? dispatch({ type: "LOGIN_ERROR", payload: { ...err.response.data } })
        : console.log('Network Failier');
    }
    );
};
