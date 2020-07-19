import React, { Component } from 'react';
import styles from './ModalResult.module.css';
import thumup from '../../assets/icons/thumb_up.png';

class ModalResult extends Component {
  render() {
    const { modalOpen, message } = this.props;
    return (
      modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <img src={thumup} alt="thumup" />
            <p className={styles.message}>{message}</p>
            <button type="button">Ok</button>
          </div>
        </div>
      )
    );
  }
}

export default ModalResult;
