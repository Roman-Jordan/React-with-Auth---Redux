import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../../store/actions/api/users';
import PropTypes from 'prop-types';

const UsersList = (props) => {
  UsersList.propTypes = {
    users: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  const {users} = props.users.users || {};
  const {getUsers} = props;
  const {loggedIn} = props.auth;
  useEffect(() => {
    !users && loggedIn && getUsers();
  } );

  return (
    <div id="mainBody">
      {users &&
        users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
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
    {getUsers},
)(UsersList);


export const UserCard = (props) => {
  const {user} = props;
  return (
    user &&
    Object.keys(user).map((userProp, i) => {
      return <p key={'key' + i}>{`${userProp}: ${user[userProp]}`}</p>;
    })
  );
};


