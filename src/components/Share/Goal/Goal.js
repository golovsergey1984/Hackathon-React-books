import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Goal.module.css';
import {
  getTrainingBooksCount,
  getTrainingDaysGoal,
  getTrainingUnreadBooksCount,
} from '../../../redux/training/trainingSelectors';

class Goal extends Component {
  render() {
    const {
      showBooksLeft,
      booksToRead,
      trainingPeriodDays,
      booksLeft,
    } = this.props;
    return (
      <div className={styles.bookStatisticContainer}>
        <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
        <div className={styles.bookStatisticCounterContainer}>
          <div className={styles.bookStatisticCounter}>{booksToRead}</div>
          <div className={styles.bookStatisticCounter}>
            {trainingPeriodDays}
          </div>
          {showBooksLeft && (
            <div className={styles.bookStatisticCounterColored}>
              {booksLeft}
            </div>
          )}
        </div>
        <div className={styles.counterLabelConyainer}>
          <p className={styles.counterLabel}>Кількість книжок</p>
          <p className={styles.counterLabel}>Кількість днів</p>
          {showBooksLeft && (
            <p className={styles.counterLabel}>Залишилось книжок</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksToRead: getTrainingBooksCount(state),
  trainingPeriodDays: getTrainingDaysGoal(state),
  booksLeft: getTrainingUnreadBooksCount(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
