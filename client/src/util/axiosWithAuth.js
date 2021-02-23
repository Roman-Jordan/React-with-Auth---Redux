import axios from "axios";

const baseURL = "http://localhost:5000";

let { token, expires, token_type } = JSON.parse(
  localStorage.getItem("token")
) || {};

//Finds Token and Checks when it expires
export const axiosWithAuth = ()=> axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    Authorization: `${token_type} ${token}`,
  },
});


