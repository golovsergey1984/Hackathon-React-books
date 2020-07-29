import React, { Component } from 'react';
import Training from '../../components/Training/Training';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styles from '../StatisticsPage/StatisticPage.module.css';

export default class TrainingPage extends Component {
  componentDidMount() {
    this.props.getAllBooks();
    this.props.getTraining();
  }
  render() {
    const { haveTraining, isLoading, plannedBooks } = this.props;

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
          <>
            {(haveTraining || !plannedBooks.length) && (
              <Redirect to="/statistics" />
            )}
            <Training {...this.props} />
          </>
        )}
      </>
    );
  }
}
