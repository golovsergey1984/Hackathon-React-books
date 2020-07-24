import React, { Component } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styles from './ResultForm.module.css';
import moment from 'moment';

export default class ResultForm extends Component {
  state = {
    date: Datetime.moment(),
    count: 1,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDatePickerChange = momemntObj => {
    this.setState({ date: momemntObj });
  };

  componentDidMount() {
    this.setState({ date: Datetime.moment() });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { trainingId, addResultAction } = this.props;
    const { date, count } = this.state;
    const addResultObject = {
      trainingId,
      data: { date: date.format(), count },
    };

    addResultAction(addResultObject);
  };

  getValidDates = currDate => {
    const { timeStart } = this.props;

    return (
      currDate.isBefore(moment()) &&
      currDate.isAfter(moment(timeStart).subtract(1, 'day'))
    );
  };

  render() {
    const { date, count } = this.state;
    return (
      <>
        <h3 className={styles.text}>РЕЗУЛЬТАТИ</h3>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.formWrapper}>
            <label className={styles.label}>
              <span className={styles.span}>Дата</span>
              <Datetime
                name="date"
                value={date}
                locale="uk"
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                onChange={this.handleDatePickerChange}
                isValidDate={this.getValidDates}
                closeOnSelect
              />
            </label>
            <label className={styles.label}>
              <span className={styles.span}>Кількість сторінок</span>
              <input
                className={styles.data}
                name="count"
                type="number"
                min={1}
                max={1000}
                value={count}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button className={styles.btn}>Додати результат</button>
        </form>
      </>
    );
  }
}
