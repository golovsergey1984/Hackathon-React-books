import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <>
        <LoginForm />
      </>
    );
  }
}

export default withAuthRedirect(LoginPage);
