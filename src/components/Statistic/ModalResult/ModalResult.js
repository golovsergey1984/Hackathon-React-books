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

    if (totalResultsCount >= totalBooksPages || daysLeft <= 0) {
      toggleShowResultModalAction();
    }
  }

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
    updateTrainingAction({ id: trainingId, trainingData });
    toggleShowResultModalAction();
  };

  render() {
    const { daysLeft, isShowResultModal } = this.props;
    const message =
      daysLeft <= 0
        ? 'Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться!'
        : 'Ти молодчина! Ти вклався в термін! Можна починати нове тренування!';
    return isShowResultModal ? (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <img src={thumup} alt="thumup" />
          <p className={styles.message}>{message}</p>
          <button type="button" onClick={this.handleButtonClick}>
            Ok
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default ModalResult;
