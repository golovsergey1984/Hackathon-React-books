import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTrainingAction } from '../../redux/training/trainingActions';
import { pnotifyAbout } from '../../services/helpers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StatisticsBlock from '../StatisticBlock/StatisticBlock.jsx';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import { findByLabelText } from '@testing-library/react';
registerLocale('uk', uk);

const findBookByTitle = (title, books) => {
  return books.find(book => book.title === title);
};

class Training extends Component {
  state = {
    value: '',
    timeStart: null,
    timeEnd: null,
    totalDays: 0,
    trainingBooks: [],
    bookTitleToAdd: '',
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
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

    const avgReadPages = Math.ceil(
      trainingBooks.reduce(
        (acc, trainingBook) => acc + trainingBook.pagesCount,
        0,
      ) / totalDays,
    );

    const trainingData = {
      books,
      timeStart: timeStart.toLocaleDateString().split('.').reverse().join('-'),
      timeEnd: timeEnd.toLocaleDateString().split('.').reverse().join('-'),
      avgReadPages,
    };
    console.log(trainingData);
    this.props.trainingSubmit(trainingData);
  };

  // componentDidMount() {}

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
      totalDays,
      timeEnd,
      timeStart,
      bookTitleToAdd,
      trainingBooks,
    } = this.state;

    const { plannedBooks } = this.props;

    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <DatePicker
              className={styles.calendarInput}
              onChange={date => this.setStartDate(date)}
              selected={timeStart}
              minDate={Date.now()}
              dateFormat="dd.MM.yyyy"
              placeholderText="Початок"
              locale="uk"
            />
            <div style={{ width: 40 }}></div>
            <DatePicker
              className={styles.calendarInput}
              onChange={date => this.setEndDate(date)}
              selected={timeEnd}
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
              <option>Обрати книги з бібліотеки</option>
              {plannedBooks.map(({ title, _id }) => (
                <option key={_id} value={title}>
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
              <tr className={styles.row}>
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
                trainingBooks.map(
                  ({ _id, title, author, year, pagesCount }) => (
                    <tr key={_id} className={styles.row}>
                      <td className={styles.selectedBookTableBookName}>
                        {title}
                      </td>
                      <td className={styles.selectedBookTableAuthor}>
                        {author}
                      </td>
                      <td className={styles.selectedBookTableYear}>{year}</td>
                      <td className={styles.selectedBookTablePages}>
                        {pagesCount}
                      </td>
                      <td className={styles.deleteBtn}>
                        <button
                          className={styles.selectedBookDelete}
                          onClick={() => this.removeFromTrainingBooks(_id)}
                        ></button>
                      </td>
                    </tr>
                  ),
                )}
              <tr>
                <td style={{display: "flex", minWidth: 100}} className={styles.selectedBookTableBookName }>...</td>
              </tr>
            </tbody>
          </table>

          {trainingBooks.length > 0 && (
            <Link
              to="/statistics"
              className={styles.startTrainingButton}
              onClick={this.createTrainng}
            >
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
            <StatisticsBlock countNumber={totalDays} title="Кількість днів" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  trainingSubmit: trainingData => dispatch(addTrainingAction(trainingData)),
});

export default connect(null, mapDispatchToProps)(Training);
