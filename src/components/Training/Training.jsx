import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import books from '../Training/books.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StatisticsBlock from '../StatisticBlock/StatisticBlock.jsx';

import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

const findBookByTitle = (title, books) => {
  return books.find(book => book.title === title);
};

class StartTraining extends Component {
  state = {
    value: '',
    startDate: null,
    endDate: null,
    allDay: 0,
    libraryBooks: [],
    trainingBooks: [],
    bookTitleToAdd: '',
  };

  setStartDate = date => {
    this.setState({
      startDate: date,
    });
  };

  setDayToRead = date => {
    let deltaDay;
    if (this.state.startDate) {
      deltaDay = (date - this.state.startDate) / 86400000;
    } else {
      deltaDay = Math.ceil((date - Date.now()) / 86400000);
    }
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToTrainingBooks = e => {
    e.preventDefault();
    const { bookTitleToAdd, trainingBooks, libraryBooks } = this.state;

    const includeBook = libraryBooks.find(
      book => book.title === bookTitleToAdd,
    );

    const stateTitles = trainingBooks.map(({ title }) => title);
    if (stateTitles.includes(bookTitleToAdd) || !bookTitleToAdd) return;
    if (!includeBook) return;
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

  render() {
    const { endDate, libraryBooks, bookTitleToAdd, trainingBooks } = this.state;

    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <DatePicker
              className={styles.calendarInput}
              onChange={date => this.setStartDate(date)}
              selected={this.state.startDate}
              minDate={Date.now()}
              dateFormat="dd.MM.yyyy"
              placeholderText="Початок"
              locale="uk"
            />
            <div style={{ width: 40 }}></div>
            <DatePicker
              className={styles.calendarInput}
              onChange={date => this.setEndDate(date)}
              selected={endDate}
              minDate={Date.now()}
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
            >
              <option>Обрати книги з бібліотеки</option>
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
          <div className={styles.bookStatisticBlockContainer}>
            <StatisticsBlock
              countNumber={trainingBooks.length}
              title="Кількість книжок"
            />
            <StatisticsBlock
              countNumber={this.state.allDay}
              title="Кількість днів"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StartTraining;
