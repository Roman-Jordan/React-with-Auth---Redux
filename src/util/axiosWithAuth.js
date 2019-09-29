import axios from 'axios'
import cookie from 'react-cookies'
import Cryptr from 'cryptr'
const client = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET

const api_key = btoa(`${client}:${secret}`);
const baseURL = 'http://localhost:2019'


export const axiosWithAuth = () => {
    let {
        access_token,
        expires,
        token_type
    } = JSON.parse(localStorage.getItem("token"))

    return axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers: {
            Authorization: `${token_type} ${access_token}`
        }
    })
}


export const loginHandler = (u) => {
    axios
        .post(`${baseURL}/oauth/token`, `grant_type=password&username=${u.username}&password=${u.password}`, {
            headers: {
                Authorization: `Basic ${api_key}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res =>{
            if(res.status === 200){
                u.secret ? encrypter(u.secret,res.data)
                :localStorage.setItem('token',JSON.stringify({
                    ...res.data,
                    refresh_token:'',
                    expires_in:Date(res.data.expires_in)
                })) 
            }
            console.log(JSON.parse(localStorage.getItem('token')))      
        })
        .catch(err => console.log(err))
}


export const encrypter = (secret,data) =>{
    //Encrypts Refresh Token
    const crypto = new Cryptr(secret)
    const encrypt = crypto.encrypt(data)
    localStorage.setItem('token',JSON.stringify({...data,refresh_token:encrypt}))
}