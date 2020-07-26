//Core
import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import Loader from 'react-loader-spinner';
import Header from '../Header/header';
/* import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; */
import { getUserAction } from '../../redux/session/sessionActions';
//Styles
import styles from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Async components
const AsyncLoginPage = lazy(() =>
  import(
    '../../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */
  ),
);
const AsyncRegistrationPage = lazy(() =>
  import(
    '../../pages/RegistrationPage/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);
const AsyncLibraryPage = lazy(() =>
  import(
    '../../pages/LibraryPage/LibraryPage' /* webpackChunkName: "library-page" */
  ),
);
const AsyncTrainingPage = lazy(() =>
  import(
    '../../pages/TrainingPage/TrainingPage' /* webpackChunkName: "training-page" */
  ),
);
const AsyncStatisticsPage = lazy(() =>
  import(
    '../../pages/StatisticsPage/StatisticsPageContainer' /* webpackChunkName: "statistics-page" */
  ),
);

class App extends Component {
  componentDidMount() {
    const { getUserAction } = this.props;
    getUserAction();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className={styles.container}>
        <Header />
        <Suspense
          fallback={
            isLoading && (
              <Loader
                className={styles.loader}
                type="Oval"
                color="#ff6b09"
                height={100}
                width={100}
                timeout={3000}
              />
            )
          }
        >
          <Switch>
            <Route path="/login" component={AsyncLoginPage} />
            <Route path="/registration" component={AsyncRegistrationPage} />
            <Route
              path="/library"
              component={AsyncLibraryPage}
              redirectTo="/login"
            />
            <Route
              path="/training"
              component={AsyncTrainingPage}
              redirectTo="/login"
            />
            <Route
              path="/statistics"
              component={AsyncStatisticsPage}
              redirectTo="/login"
            />

            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  getUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
