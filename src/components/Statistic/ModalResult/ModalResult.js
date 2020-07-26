import React, { Component } from 'react';
import styles from './ModalResult.module.css';
import thumup from '../../../assets/icons/thumb_up.png';

class ModalResult extends Component {
  componentDidMount() {
    const {
      totalResultsCount,
      totalBooksPages,
      toggleShowResultModalAction,
      daysLeft,
    } = this.props;
    console.log('totalResultsCount', totalResultsCount);
    console.log('totalBooksPages', totalBooksPages);
    console.log('daysLeft', daysLeft);

    if (totalResultsCount >= totalBooksPages || daysLeft <= 0) {
      toggleShowResultModalAction();
    }
  }

  // componentDidUpdate() {
  //   const {
  //     totalResultsCount,
  //     totalBooksPages,
  //     toggleShowResultModalAction,
  //     daysLeft,
  //   } = this.props;
  //   console.log('totalResultsCount', totalResultsCount);
  //   console.log('totalBooksPages', totalBooksPages);
  //   console.log('daysLeft', daysLeft);

  //   if (totalResultsCount >= totalBooksPages || daysLeft <= 0) {
  //     toggleShowResultModalAction();
  //   }
  // }

  handleButtonClick = () => {
    const {
      trainingId,
      updateTrainingAction,
      toggleShowResultModalAction,
    } = this.props;
    const trainingData = {
      isDone: true,
      booksCount: 0,
      unreadCount: 0,
      readPagesCount: 0,
      avgReadPages: 0,
    };
    // console.log({ id: trainingId, trainingData });
    updateTrainingAction({ id: trainingId, trainingData });
    toggleShowResultModalAction();
  };

  render() {
    const { daysLeft, isShowResultModal } = this.props;
    const message = daysLeft <= 0 ? 'Слабовато!' : 'Хааарош!';
    console.log('isShowResultModal', isShowResultModal);
    return isShowResultModal ? (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <img src={thumup} alt="thumup" />
          <p className={styles.message}>{message}</p>
          <p className={styles.message}></p>
          <button type="button" onClick={this.handleButtonClick}>
            Ok
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default ModalResult;
