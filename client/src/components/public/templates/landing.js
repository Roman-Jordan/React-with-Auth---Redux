import React, {useEffect} from 'react';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';
import {Route, Switch} from 'react-router';
import {connect} from 'react-redux';
import {getNasa} from '../../../store/actions/api/nasa';
import PropTypes from 'prop-types';

const Body = (props) => {
  Body.propTypes = {
    nasa: PropTypes.shape({
      url: PropTypes.string,
      fetching: PropTypes.bool.isRequired,
      nasa: PropTypes.object.isRequired,
    }),
    getNasa: PropTypes.func.isRequired,
  };

  const {nasa} = props.nasa;
  useEffect(() => {
    !props.nasa.nasa.url && props.getNasa();
  });
  console.log(props.nasa);


  return (
    <div id="mainBody" style={{backgroundImage: `url("${nasa.url}")`}}>
      <Switch>
        <Route path="/register" render={() => <RegisterForm {...props} />} />
        <Route render={() => <LoginForm {...props} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(
    mapStateToProps,
    {getNasa},
)(Body);

