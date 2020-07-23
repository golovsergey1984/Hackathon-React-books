import React, { Component, Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import LoginForm from '../../components/LoginForm/LoginForm';
import LogOutModal from "../../components/LogOutModal/LogOutModal"

class LoginPage extends Component {
  render() {
    return (
      <Fragment>
        <LoginForm />
        {/* <LogOutModal /> */}
      </Fragment>
    );
  }
}

export default withAuthRedirect(LoginPage);
