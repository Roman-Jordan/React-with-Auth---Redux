import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from '../../actions/auth';

const checkLogedIn = () =>{
  return localStorage.getItem('token') ?
    true :
    false;
};

const setToken = (token) =>{
  console.log(token);
  localStorage.setItem('token', token);
};

const initialState = {
  loggedIn: checkLogedIn(),
  errors: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setToken(action.payload.token);
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        loggedIn: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        errors: {...action.payload.errors},
      };
    default:
      return state;
  }
};
