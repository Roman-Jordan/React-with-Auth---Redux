import axios from 'axios'
const client = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET

const api_key = btoa(`${client}:${secret}`);
const baseURL = 'http://localhost:2019'

export const axiosWithAuth = () =>{
    const token = localStorage.getItem("token")
    
    return axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}


export const loginHandler = (u) =>  {
    axios
      .post(`${baseURL}/oauth/token`, `grant_type=password&username=${u.username}&password=${u.password}`,{
        headers:{
          Authorization:`Basic ${api_key}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res=>localStorage.setItem("token",res.data.access_token))
      .catch(err => console.log(err))  
}