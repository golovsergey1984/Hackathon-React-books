import React, { Component } from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import LoginForm from '../../components/LoginForm/LoginForm';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <>
        {isLoading ? (
          <Loader
            className={styles.loader}
            type="Oval"
            color="#ff6b09"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <LoginForm />
        )}
      </>
    );
  }
}

const mSTP = state => ({
  isLoading: state.isLoading,
});

export default connect(mSTP)(withAuthRedirect(LoginPage));
