import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IsAuthenticated } from '../redux/session/sessionSelectors';

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        return;
      }

      if (this.props.location.state && this.props.location.state.from) {
        return this.props.history.replace(this.props.location.state.from);
      }

      this.props.history.replace('/library');
    }

    componentDidUpdate() {
      if (!this.props.isAuthenticated) {
        return;
      }

      // console.log('WithAuthRedirect: ', this.props);

      if (this.props.location.state && this.props.location.state.from) {
        return this.props.history.replace(this.props.location.state.from);
      }

      this.props.history.replace('/library');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: IsAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
