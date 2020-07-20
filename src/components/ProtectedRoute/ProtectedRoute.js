import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IsAuthenticated } from '../../redux/session/sessionSelectors';

const ProtectedRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: IsAuthenticated(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
