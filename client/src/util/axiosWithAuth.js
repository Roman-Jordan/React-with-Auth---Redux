import axios from 'axios';

const baseURL = 'http://192.168.0.75:5000';


// Finds Token and Checks when it expires
export const axiosWithAuth = () => axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});


