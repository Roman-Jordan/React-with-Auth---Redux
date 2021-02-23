import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../../actions/auth";

const initialState = {
  loggedIn: false,
  fetching: true,
  error: null
};

const setToken = (token) =>{
  localStorage.setItem("token", token);
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setToken(action.payload.token);
      return {
        ...state,
        loggedIn: true,
        fetching: !state.fetching
      }
    case LOGOUT:
      return {
        loggedIn: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        fetching: !state.fetching,
        error: action.payload
      }
    default:
      return state;
  }
};