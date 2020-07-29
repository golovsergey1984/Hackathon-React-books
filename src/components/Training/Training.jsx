import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTrainingAction } from '../../redux/training/trainingActions';
import { pnotifyAbout } from '../../services/helpers';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

class StartTraining extends Component {
  state = {
    startDate: null,
    endDate: null,
    allDay: 0,
  };

  setStartDate = date => {
    this.setState({
      startDate: date,
    });
  };

  setDayToRead = date => {
    const deltaDay = (date - this.state.startDate) / 86400000;

    this.setState({
      allDay: deltaDay,
    });
  };

  setEndDate = date => {
    this.setState({
      endDate: date,
    });
    this.setDayToRead(date);
  };

  addToTrainingBooks = e => {
    e.preventDefault();
    const { timeStart, timeEnd, bookTitleToAdd, trainingBooks } = this.state;

    const { plannedBooks } = this.props;
    if (!timeStart) return pnotifyAbout('Введіть дату початку тренування');
    if (!timeEnd) return pnotifyAbout('Введіть дату завершення тренування');

    const includeBook = plannedBooks.find(
      book => book.title === bookTitleToAdd,
    );

    const stateTitles = trainingBooks.map(({ title }) => title);
    if (stateTitles.includes(bookTitleToAdd) || !bookTitleToAdd) return;
    if (!includeBook) return;
    const bookToAdd = findBookByTitle(bookTitleToAdd, plannedBooks);

    this.setState(state => ({
      trainingBooks: [bookToAdd, ...state.trainingBooks],
    }));
  };

  removeFromTrainingBooks = _id => {
    console.log('id: ', _id);
    console.log('trainingBooks: ', this.state.trainingBooks);
    this.setState(state => ({
      trainingBooks: state.trainingBooks.filter(book => book._id !== _id),
    }));
  };

  createTrainng = () => {
    const { totalDays, timeStart, timeEnd, trainingBooks } = this.state;
    const books = trainingBooks.map(trainingBook => ({
      book: trainingBook._id,
    }));
    // console.log('books: ', books);
    const avgReadPages = Math.ceil(
      trainingBooks.reduce(
        (acc, trainingBook) => acc + trainingBook.pagesCount,
        0,
      ) / totalDays,
    );

    const trainingData = {
      books,
      timeStart: timeStart.toISOString().split('T')[0],
      timeEnd: timeEnd.toISOString().split('T')[0],
      avgReadPages,
    };
    this.props.trainingSubmit(trainingData);
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.timeStart !== this.state.timeStart && this.state.timeEnd) ||
      (prevState.timeEnd !== this.state.timeEnd && this.state.timeStart)
    ) {
      this.setDayToRead();
    }
  }

  static propTypes = {
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    bookTitleToAdd: PropTypes.string.isRequired,
    trainingBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    console.log(this.state.startDate, this.state.endDate, this.state.allDay);
    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <>
              <DatePicker
                className={styles.calendarInput}
                onChange={date => this.setStartDate(date)}
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                dateFormat="dd.MM.yyyy"
                placeholderText="Початок"
                locale="uk"
              />
              <DatePicker
                className={styles.calendarInput}
                onChange={date => this.setEndDate(date)}
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                minDate={this.state.startDate}
                dateFormat="dd.MM.yyyy"
                placeholderText="Завершення"
                locale="uk"
              />
            </>
          </div>
          <form className={styles.bookSelectForm}>
            <p>
              <select className={styles.bookSelectField} name="book">
                <option>Обрати книги з бібліотеки</option>
                <option value="book1">BOOK-1</option>
                <option value="book2">BOOK-2</option>
                <option value="book3">BOOK-3</option>
              </select>
            </p>
            <p>
              <input
                className={styles.bookSelectSubmit}
                type="submit"
                value="Додати"
              />
            </p>
          </form>

          <table className={styles.selectedBookTable}>
            <thead>
              <tr>
                <th className={styles.selectedBookTableBookName}>
                  Назва книги
                </th>
                <th className={styles.selectedBookTableAuthor}>Автор</th>
                <th className={styles.selectedBookTableYear}>Рік</th>
                <th className={styles.selectedBookTablePages}>Стор.</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.selectedBookTableBookName}>
                  "Війна та мир"
                </td>
                <td className={styles.selectedBookTableAuthor}>Лев Толстий</td>
                <td className={styles.selectedBookTableYear}>1869</td>
                <td className={styles.selectedBookTablePages}>1472</td>
                <td>
                  <button className={styles.selectedBookDelete}></button>
                </td>
              </tr>
              <tr>
                <td className={styles.selectedBookTableBookName}>...</td>
              </tr>
            </tbody>
          </table>
          <Link to="/statistics" className={styles.startTrainingButton}>
            Почати тренування
          </Link>
        </div>
        <div className={styles.bookStatisticContainer}>
          <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
          <div className={styles.bookStatisticCounterContainer}>
            <div className={styles.bookStatisticCounter}>0</div>
            <div className={styles.bookStatisticCounter}>
              {this.state.allDay}
            </div>
          </div>
          <div className={styles.counterLaibelConyainer}>
            <p className={styles.counterLaibel}>Кількість книжок</p>
            <p className={styles.counterLaibel}>Кількість днів</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StartTraining;
