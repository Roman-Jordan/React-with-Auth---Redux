import { combineReducers } from "redux";
import { loginReducer } from "./formReducers/loginReducer";
import { usersReducer } from "./apiReducers/getUsers";


export default combineReducers({
  loggedIn: loginReducer,
  users: usersReducer,
});
