import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicMainView from './components/public'
import PrivateMainView from './components/private'
import UsersList from './components/shared/UsersList'
import { connect } from "react-redux";


function App(props) {

  let {loggedIn} = props
  
  console.log(localStorage.getItem('token'))
  return (
    <div className="App">
      {loggedIn ? <PrivateRoute path="/" component={PrivateMainView}  />
      :<Route match path="/" component={PublicMainView} />}
      {loggedIn && <UsersList />}
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    ...state.loggedIn
  }
}

export default connect(mapStateToProps,{})(App);



