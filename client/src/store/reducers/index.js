import {combineReducers} from 'redux';
import {authReducer} from './formReducers/authReducer';
import {usersReducer} from './apiReducers/getUsers';
import {nasaReducer} from './apiReducers/getNasa';


export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  nasa: nasaReducer,
});
