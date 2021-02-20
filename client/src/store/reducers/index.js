import { combineReducers } from "redux";
import { loginReducer } from "./formReducers/loginReducer";

export default combineReducers({
  loggedIn: loginReducer,
});
