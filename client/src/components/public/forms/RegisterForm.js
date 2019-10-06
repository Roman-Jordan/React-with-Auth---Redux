import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginHandler } from "../../../util/axiosWithAuth";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
const RegisterForm = props => {
  console.log(props);

  const [userRoles, setUserRoles] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/roles/roles")
      .then(res => {
        setUserRoles(res.data);
      })
      .catch(err => alert(err));
  }, []);

  const change = e => {
    e.target.value &&
      props.history.push(`/register/${e.target.value}`) &&
      setRole(e.target.value);
  };

  return (
    <>
      <h1>Register as:</h1>

      <select onChange={change}>
        <option>Select Role</option>
        {userRoles &&
          userRoles.map((role, i) => {
            return (
              <option value={role} key={i}>
                {role}
              </option>
            );
          })}
      </select>
      {role && <p>{`${role.toUpperCase()} Role Selected`}</p>}

      <Switch>
        <Route exact path="/register/provider" render={Provider} />
        <Route exact path="/register/sponsor" component={Sponsor} />
        <Route exact path="/register/company" component={Company} />
        <Route exact path="/register/consumer" component={Consumer} />
      </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginHandler }
)(RegisterForm);

export const Provider = () => {
  return (
    <>
      <p>Hello from Provider</p>
      <form>
        <SharedFeilds />
      </form>
    </>
  );
};

export const Consumer = () => {
  return (
    <>
      <p>Hello from Consumer</p>
      <form>
        <SharedFeilds />
      </form>
    </>
  );
};

export const Company = () => {
  return (
    <>
      <p>Hello from Company</p>
      <form>
        <SharedFeilds />
        <input type="text" name="company" placeholder="Company Name" />
      </form>
    </>
  );
};

export const Sponsor = () => {
  return (
    <>
      <p>Hello from Sponsor</p>
      <form>
        <SharedFeilds />
      </form>
    </>
  );
};

export const SharedFeilds = () => {
  return (
    <>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" required />
    </>
  );
};

//******************************************** */
// PROVIDER:

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG
//******************************************** */
// CONSUMER

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG

//******************************************** */

// COMPANIES:

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG

//******************************************** */
// SPONSOR:

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG
