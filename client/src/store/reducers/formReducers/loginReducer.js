import {FETCH_ERROR,FETCH_SUCCESS,LOGOUT} from "../../actions";


const loggedInCheck = () => {
  let token = localStorage.getItem("token");
  token = token && JSON.parse(
    token
  );

  if(token){
    return true;
  }else{
    return false;
  }
}

const initialState = {
  loggedIn:loggedInCheck(),
  fetching:true,
  error:null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loggedIn: action.payload,
        fetching: !state.fetching
      }
    case LOGOUT:
      return{
        loggedIn:false
      }
    case FETCH_ERROR:
      return{
        ...state,
        fetching: !state.fetching,
        error:action.payload
      }
    default:
      return state;
  }
};