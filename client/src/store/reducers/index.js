import {combineReducers} from 'redux';
import {authReducer} from './formReducers/authReducer';
import {usersReducer} from './apiReducers/getUsers';


export default combineReducers({
  auth: authReducer,
  users: usersReducer,
});
