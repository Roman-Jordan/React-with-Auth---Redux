import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../util/axiosWithAuth";

const UsersList = () => {
  let [users, setUsers] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("/users/")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="mainBody">
      {users &&
        users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
    </div>
  );
};
export default UsersList;

export const UserCard = (props) => {
  let { user } = props;
  return (
    user &&
    Object.keys(user).map((userProp, i) => {
      return <p key={'key'+i}>{`${userProp}: ${user[userProp]}`}</p>;
    })
  );
};
