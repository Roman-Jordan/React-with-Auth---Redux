import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../../actions/auth";

const initialState = {
  loggedIn: false,
  error: null,
};

const setToken = (token) =>{
  localStorage.setItem("token", token);
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setToken(action.payload.token);
      return {
        ...state,
        loggedIn: true,
      }
    case LOGOUT:
      return {
        loggedIn: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: action.payload
      }
    default:
      return state;
  }
};