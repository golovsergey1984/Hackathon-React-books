//Core

import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components

import Loader from 'react-loader-spinner';
import LoginForm from '../components/LoginForm/LoginForm';

// import Header from '../Header/Header';

import Statistic from './Statistic/Statistic';

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
      <div className="container">
        <div className="app">
          <LoginForm />
          {/* <Header />
          <Suspense
            fallback={
              <Loader
                className="loader"
                type="Oval"
                color="#ff6b09"
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Switch>
              <Route path="/login" component={AsyncLoginPage} />
              <Route path="/registration" component={AsyncRegistrationPage} />
              <Route path="/library" component={AsyncLibraryPage} />
              <Route path="/training" component={AsyncTrainingPage} />
              <Route path="/statistics" component={AsyncStatisticsPage} />
              <Redirect to={AsyncTrainingPage} />
            </Switch>
          </Suspense> */}
          <Statistic />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
