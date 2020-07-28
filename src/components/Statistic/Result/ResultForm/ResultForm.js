import React, { Component } from 'react';
// import Datetime from 'react-datetime';
import moment from 'moment';
import styles from './ResultForm.module.css';
// import 'react-datetime/css/react-datetime.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

export default class ResultForm extends Component {
  state = {
    date: null,
    count: 1,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDatePickerChange = date => {
    this.setState({ date });
  };

  componentDidMount() {
    this.setState({ date: Date.now() });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { trainingId, addResultAction } = this.props;
    const { date, count } = this.state;
    const addResultObject = {
      trainingId,
      data: { date, count },
    };

    addResultAction(addResultObject);
  };

  render() {
    const { date, count } = this.state;
    return (
      <>
        <h3 className={styles.text}>РЕЗУЛЬТАТИ</h3>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.formWrapper}>
            <div className={styles.label}>
              <span className={styles.span}>Дата</span>
              <DatePicker
                className={styles.date}
                onChange={date => this.handleDatePickerChange(date)}
                selected={date}
                minDate={this.props.timeStart}
                maxDate={Date.now()}
                dateFormat="dd.MM.yyyy"
                shouldCloseOnSelect={true}
                locale="uk"
              />
            </div>
            <label className={styles.label}>
              <span className={styles.span}>Кількість сторінок</span>
              <input
                className={styles.pages}
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
