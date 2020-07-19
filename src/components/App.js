//Core
import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Loader from 'react-loader-spinner';
// import Header from '../Header/Header';
//Styles
import './main.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';




//Async components
// const AsyncLoginPage = lazy(() =>
//   import('../pages/Login/Login' /* webpackChunkName: "login-page" */),
// );
// const AsyncRegistrationPage = lazy(() =>
//   import(
//     '../pages/Registration/Registration' /* webpackChunkName: "registration-page" */
//   ),
// );
// const AsyncLibraryPage = lazy(() =>
//   import('../pages/Library/Library' /* webpackChunkName: "library-page" */),
// );
// const AsyncTrainingPage = lazy(() =>
//   import('../pages/Training/Training' /* webpackChunkName: "training-page" */),
// );
// const AsyncStatisticsPage = lazy(() =>
//   import(
//     '../pages/Statistics/Statistics' /* webpackChunkName: "statistics-page" */
//   ),
// );


class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world!!!</p>
        {/* <LogOut /> */}

      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

