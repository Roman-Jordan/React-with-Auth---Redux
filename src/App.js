import React,{useState,useEffect} from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicMainView from './components/public'
import PrivateMainView from './components/private'
import { axiosWithAuth,loginHandler } from './util/axiosWithAuth';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [error,setError] = useState()

  

  return (
    <div className="App">
      <LoginForm />
      {error && <p>{error}</p>}
      {loggedIn ? <PrivateRoute path="/" component={PrivateMainView}  />
      :<Route path="/" component={PublicMainView} />}
    </div>
  );
}

export default App;

export const LoginForm = () =>{
  let [user,setUser] = useState({})
  let username = user.username ? user.username:'';
  let password = user.password ? user.password:'';
  const change= (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const onSubmit= (e) =>{
    e.preventDefault()
    console.log('HERE',loginHandler(user))
  }
  console.log(user)
  return(
    <form onSubmit={onSubmit}>
      <input onChange={change} name="username" placeholder="Username" value={username} type="text"/>
      <input onChange={change} name="password" placeholder="Password" value={password} type="password" />
      <input type="submit" />
    </form>
  )
}