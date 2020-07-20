import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOut from '../pages/LogOut';

class App extends Component {
  render() {
    return (
      <div>
        {/* <p>Hello world!!!</p> */}
        <Route path="/library_full" component={AsyncLibrary} />
        {/* <LogOut /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
