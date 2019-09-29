import React,{useState,useEffect} from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicMainView from './components/public'
import PrivateMainView from './components/private'
import UsersList from './components/shared/UsersList'

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [error,setError] = useState()
  console.log(localStorage.getItem('token'))
  return (
    <div className="App">
      
      {error && <p>{error}</p>}
      {loggedIn ? <PrivateRoute path="/" component={PrivateMainView}  />
      :<Route match path="/" logIn={setLoggedIn} render={()=><PublicMainView logIn={setLoggedIn}/>} />}
      {localStorage.getItem('token') && <UsersList />}
    </div>
  );
}

export default App;

