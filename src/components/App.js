<<<<<<< HEAD
//Core
import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
// import Header from '../Header/Header';
import Loader from 'react-loader-spinner';
import Library_addBook from '../components/library_addBooks/Library_addBooks';
import LoginForm from '../components/LoginForm/LoginForm';
import Statistic from '../components/Statistic/Statistic';
import LogoutModule from '../pages/LogOut';
import StatisticsModal from '../components/ModalResult/ModalResult';
import LineChart from '../components/LineChart/LineChart';

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

=======
import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOut from '../pages/LogOut';
>>>>>>> d2ff0f930b366cc2847bf2825c2233c8b20f5cfa

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="container">
        <div className="app">
          <LoginForm />

          <Statistic />
          <Library_addBook />
          <LineChart />

          {/* <LogoutModule /> */}
          {/* <StatisticsModal /> */}

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
        </div>
=======
      <div>
        {/* <p>Hello world!!!</p> */}
        <Route path="/library_full" component={AsyncLibrary} />
        {/* <LogOut /> */}
>>>>>>> d2ff0f930b366cc2847bf2825c2233c8b20f5cfa
      </div>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> d2ff0f930b366cc2847bf2825c2233c8b20f5cfa
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
<<<<<<< HEAD

=======
>>>>>>> d2ff0f930b366cc2847bf2825c2233c8b20f5cfa
