import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
const Header = (props) => {
  Header.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  if (props.location.pathname.includes('/android_asset')) {
    props.location.pathname = '/';
  }

  return (
    <header>
      <h2>Welcome</h2>
      <nav>
        <Switch>
          <Route
            exact
            path='/'
            render={()=> <Link to="/register">Register</Link>}
          />
          <Route
            exact
            path='/login'
            render={()=> <Link to="/register">Register</Link>}
          />
          <Route
            exact
            path='/register'
            render={()=> <Link to="/login">Login</Link>}
          />
        </Switch>
      </nav>
    </header>
  );
};

export default Header;
