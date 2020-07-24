import React, { Component } from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

export default withAuthRedirect(RegistrationPage);
