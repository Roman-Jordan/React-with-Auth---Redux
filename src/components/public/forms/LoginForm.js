import React,{useState} from 'react';
import {loginHandler} from '../../../util/axiosWithAuth'

const LoginForm = props =>{
    let {setLoggedIn}=props
    let [user,setUser] = useState({})
    let username = user.username ? user.username:'';
    let password = user.password ? user.password:'';
    const change= (e) =>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= (e) =>{
      e.preventDefault()
      loginHandler(user)
      
    }
    return(
      <form onSubmit={onSubmit}>
        <input onChange={change} name="username" placeholder="Username" value={username} type="text"/>
        <input onChange={change} name="password" placeholder="Password" value={password} type="password" />
        <input type="submit" />
      </form>
    )
  }

  export default LoginForm