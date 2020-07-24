import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import books from '../Statistic/book/books.json';
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

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToTrainingBooks = e => {
    e.preventDefault();
    const { bookTitleToAdd, trainingBooks, libraryBooks } = this.state;
    // console.log('bookToAdd: ', bookTitleToAdd);
    const stateTitles = trainingBooks.map(({ title }) => title);
    if (stateTitles.includes(bookTitleToAdd) || !bookTitleToAdd) return;
    const bookToAdd = findBookByTitle(bookTitleToAdd, libraryBooks);
    this.setState(state => ({
      trainingBooks: [bookToAdd, ...state.trainingBooks],
    }));
  };

  componentDidMount() {
    this.setState({ libraryBooks: books });
  }

  render() {
    // console.log(this.state.startDate, this.state.endDate, this.state.allDay);
    console.log(this.state.trainingBooks);
    const { libraryBooks, bookTitleToAdd, trainingBooks } = this.state;
    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <DatePicker
              className={styles.calendarInput}
              style={{ marginRight: 40 }}
              onChange={date => this.setStartDate(date)}
              selected={this.state.startDate}
              // selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              dateFormat="dd.MM.yyyy"
              placeholderText="Початок"
              locale="uk"
            />
            <div style={{ width: 40 }}></div>
            <DatePicker
              className={styles.calendarInput}
              onChange={date => this.setEndDate(date)}
              selected={this.state.endDate}
              // selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
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
                      <button className={styles.selectedBookDelete}></button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td className={styles.selectedBookTableBookName}>...</td>
              </tr>
            </tbody>
          </table>
          {trainingBooks.length > 0 && <Link to="/statistics" className={styles.startTrainingButton}>
            Почати тренування
          </Link>}
        </div>
        <div className={styles.bookStatisticContainer}>
          <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
          <div className={styles.bookStatisticCounterContainer}>
            <div className={styles.bookStatisticCounter}>{trainingBooks.length}</div>
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
