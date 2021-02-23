import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../../actions";


const loggedInCheck = () => {
  let token = localStorage.getItem("token");
  token = token && JSON.parse(
    token
  );

  if (token) {
    return true;
  } else {
    return false;
  }
}

const initialState = {
  loggedIn: loggedInCheck(),
  fetching: true,
  error: null
};

const setToken = (token) =>{
  localStorage.setItem("token", token);
}


export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload)
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
        fetching: !state.fetching,
        error: action.payload
      }
    default:
      return state;
  }
};