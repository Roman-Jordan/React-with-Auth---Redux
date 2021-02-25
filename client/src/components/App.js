import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from '../util/PrivateRoute';
import PublicMainView from './public';
import PrivateMainView from './private';
import {connect} from 'react-redux';

const App = (props) => {
  const {loggedIn} = props.auth || false;

  return (
    <div className="App">
      {loggedIn ? (
        <PrivateRoute path="/" component={PrivateMainView} />
      ) : (
        <Route match path="/" component={PublicMainView} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(App);
