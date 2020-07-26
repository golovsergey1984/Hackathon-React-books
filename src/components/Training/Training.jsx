import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import books from '../Statistic/book/books.json';
import { pnotifyAbout } from '../../services/helpers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

const findBookByTitle = (title, books) => {
  return books.find(book => book.title === title);
};

class StartTraining extends Component {
  state = {
    timeStart: null,
    timeEnd: null,
    totalDays: 0,
    libraryBooks: [],
    trainingBooks: [],
    bookTitleToAdd: '',
    avgReadPages: 0,
  };

  setStartDate = date => {
    if (this.state.timeEnd && date - this.state.timeEnd > 0)
      return pnotifyAbout(
        'Початок тренування не може слідувати за завершенням',
      );
    this.setState({
      timeStart: date,
    });
  };

  setDayToRead = () => {
    const { timeStart, timeEnd } = this.state;
    const deltaDay = (timeEnd - timeStart) / 86400000;
    this.setState({
      totalDays: deltaDay,
    });
  };

  setEndDate = date => {
    this.setState({
      timeEnd: date,
    });
    // this.setDayToRead(date);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToTrainingBooks = e => {
    e.preventDefault();
    const {
      timeStart,
      timeEnd,
      bookTitleToAdd,
      trainingBooks,
      libraryBooks,
    } = this.state;
    if (!timeStart) return pnotifyAbout('Введіть дату початку тренування');
    if (!timeEnd) return pnotifyAbout('Введіть дату завершення тренування');

    const stateTitles = trainingBooks.map(({ title }) => title);
    if (stateTitles.includes(bookTitleToAdd) || !bookTitleToAdd) return;
    const bookToAdd = findBookByTitle(bookTitleToAdd, libraryBooks);
    this.setState(state => ({
      trainingBooks: [bookToAdd, ...state.trainingBooks],
    }));
  };

  removeFromTrainingBooks = id => {
    this.setState(state => ({
      trainingBooks: state.trainingBooks.filter(book => book.id !== id),
    }));
  };

  componentDidMount() {
    this.setState({ libraryBooks: books });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.timeStart !== this.state.timeStart && this.state.timeEnd) ||
      (prevState.timeEnd !== this.state.timeEnd && this.state.timeStart)
    ) {
      this.setDayToRead();
    }
  }

  render() {
    const {
      timeEnd,
      timeStart,
      totalDays,
      libraryBooks,
      bookTitleToAdd,
      trainingBooks,
    } = this.state;

    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <DatePicker
              className={styles.calendarInput}
              onChange={this.setStartDate}
              selected={timeStart}
              // selectsStart
              // startDate={this.state.startDate}
              minDate={Date.now()}
              // endDate={this.state.endDate}
              dateFormat="dd.MM.yyyy"
              placeholderText="Початок"
              locale="uk"
            />
            <div style={{ width: 40 }}></div>
            <DatePicker
              className={styles.calendarInput}
              onChange={this.setEndDate}
              selected={timeEnd}
              // selectsEnd
              // startDate={this.state.startDate}
              // endDate={this.state.endDate}
              minDate={!timeStart ? Date.now() : timeStart}
              dateFormat="dd.MM.yyyy"
              placeholderText="Завершення"
              locale="uk"
            />
          </div>

          <form
            className={styles.bookSelectForm}
            onSubmit={this.addToTrainingBooks}
          >
            <select
              className={styles.bookSelectField}
              name="bookTitleToAdd"
              value={bookTitleToAdd}
              onChange={this.handleChange}
              required
            >
              {libraryBooks.map(({ title, id }) => (
                <option key={id} value={title}>
                  {title}
                </option>
              ))}
            </select>

            <button className={styles.bookSelectSubmit} type="submit">
              Додати
            </button>
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
              {trainingBooks.length > 0 &&
                trainingBooks.map(({ id, title, author, year, sheets }) => (
                  <tr key={id}>
                    <td className={styles.selectedBookTableBookName}>
                      {title}
                    </td>
                    <td className={styles.selectedBookTableAuthor}>{author}</td>
                    <td className={styles.selectedBookTableYear}>{year}</td>
                    <td className={styles.selectedBookTablePages}>{sheets}</td>
                    <td>
                      <button
                        className={styles.selectedBookDelete}
                        onClick={() => this.removeFromTrainingBooks(id)}
                      ></button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td className={styles.selectedBookTableBookName}>...</td>
              </tr>
            </tbody>
          </table>
          {trainingBooks.length > 0 && (
            <Link to="/statistics" className={styles.startTrainingButton}>
              Почати тренування
            </Link>
          )}
        </div>
        <div className={styles.bookStatisticContainer}>
          <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
          <div className={styles.bookStatisticCounterContainer}>
            <div className={styles.bookStatisticCounter}>
              {trainingBooks.length}
            </div>
            <div className={styles.bookStatisticCounter}>{totalDays}</div>
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
