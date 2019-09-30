import {axiosWithAuth,loginHandler} from '../../util/axiosWithAuth';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FETCH_ERROR = 'FETCH_ERROR';
export const logOut=() =>{
  console.log('here')
  return{
    type:LOGOUT
  }
}



