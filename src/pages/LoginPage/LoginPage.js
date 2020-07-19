import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class LoginPage extends Component {
  render() {
    return (
      <>
        <div>LOGIN PAGE</div>
      </>
    );
  }
}

export default withAuthRedirect(LoginPage);
