import axios from "axios";

const baseURL = "http://localhost:5000";

const token = localStorage.getItem("token") || '';

//Finds Token and Checks when it expires
export const axiosWithAuth = ()=> axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    Authorization: `Basic ${token}`,
  },
});


