import axios from 'axios'
import Cryptr from 'cryptr'
const client = process.env.REACT_APP_CLIENT_ID || 'YOURCLIENTID'
const secret = process.env.REACT_APP_CLIENT_SECRET || 'YOURCLIENTSECRET'

//Base 64 Encode client:secret
const api_key = btoa(`${client}:${secret}`);
const baseURL = 'http://localhost:2019'


export const axiosWithAuth = () => {
    let {
        token,
        expires,
        token_type
    } = JSON.parse(localStorage.getItem("token"))

    return axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers: {
            Authorization: `${token_type} ${token}`
        }
    })
}


export const loginHandler = (u) => {
    console.log(u)
    axios
        .post(`${baseURL}/oauth/token`, `grant_type=password&username=${u.username}&password=${u.password}`, {
            headers: {
                Authorization: `Basic ${api_key}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            if (res.status === 200) {
                u.secret ? encrypter(u.secret, res.data) :
                    localStorage.setItem('token', JSON.stringify({
                        token: res.data.access_token,
                        token_type: res.data.token_type,
                        expires: Date(res.data.expires_in)
                    }))
            } else {
                console.log(res.status)
            }
            console.log(JSON.parse(localStorage.getItem('token')))
        })
        .catch(res => alert(res))
}


export const encrypter = (secret, data) => {
    //Encrypts Refresh Token
    const crypto = new Cryptr(secret)
    const encrypt = crypto.encrypt(data.refresh_token)
    localStorage.setItem('token', JSON.stringify({
        refresh_token: encrypt,
        token: data.access_token,
        token_type: data.token_type,
        expires: Date(data.expires_in)
    }))
}