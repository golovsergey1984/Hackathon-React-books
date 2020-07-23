import React, { Component } from 'react';
import styles from './ResultForm.module.css';
import moment from 'moment';

export default class ResultForm extends Component {
  state = {
    dateValue: Date.now(),
    pagesValue: 1,
  };
  render() {
    return (
      <>
        <h3 className={styles.text}>РЕЗУЛЬТАТИ</h3>
        <form className={styles.form}>
          <div className={styles.formWrapper}>
            <label className={styles.label}>
              <span className={styles.span}>Дата</span>
              <input
                className={styles.data}
                type="date"
                name="date"
                value={moment().format('YYYY-MM-DD')}
                //value="2018-07-22"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.span}>Кількість сторінок</span>
              <input
                className={styles.data}
                type="number"
                min={1}
                max={1000}
                value={this.state.pagesValue}
              />
            </label>
          </div>
          <button className={styles.btn}>Додати результат</button>
        </form>
      </>
    );
  }
}
