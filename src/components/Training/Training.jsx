import React, { Component } from 'react';
import styles from './Training.module.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StatisticsBlock from '../StatisticBlock/StatisticBlock.jsx';

import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

class StartTraining extends Component {
  state = {
    value: '',
    startDate: null,
    endDate: null,
    allDay: 0,
    books: [
      {
        id: '1',
        bookName: 'Scrum. Революционный метод управления проектами',
        bookAuthor: 'Джефф Сазерленд',
        bookYear: '2014',
        bookPages: 25,
      },
      {
        id: '2',
        bookName: 'Dedline. Роман об управлении проектами',
        bookAuthor: 'Том ДеМарко',
        bookYear: '2006',
        bookPages: 188,
      },
      {
        id: '3',
        bookName: '5 Попроков команды. Притчи о лидерстве.',
        bookAuthor: 'Патрик Ленсиони',
        bookYear: '2011',
        bookPages: 125,
      },
    ],
    selektedBooks: [],
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

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  filterBook = (books, filter) => {
    return books.filter(book => book.bookName.includes(filter));
  };

  handleSubmit = event => {
    event.preventDefault();

    const includeBook = this.state.selektedBooks.find(
      book => book.bookName === this.state.value,
    );

    if (includeBook) {
      console.log('this book is add');
    } else {
      this.setState(state => ({
        selektedBooks: [
          ...state.selektedBooks,
          ...this.filterBook(this.state.books, this.state.value),
        ],
      }));
    }
  };

  deletBook = id => {
    this.setState(state => ({
      selektedBooks: state.selektedBooks.filter(book => book.id !== id),
    }));
  };
  render() {
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
          <form className={styles.bookSelectForm} onSubmit={this.handleSubmit}>
            <select
              className={styles.bookSelectField}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>Обрати книги з бібліотеки</option>
              {this.state.books.map(book => {
                return <option key={book.id}>{book.bookName}</option>;
              })}
            </select>
            <input
              className={styles.bookSelectSubmit}
              type="submit"
              value="Додати"
            />
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
              {this.state.selektedBooks.map(book => {
                return (
                  <tr key={book.id}>
                    <td className={styles.selectedBookTableBookName}>
                      {book.bookName}
                    </td>
                    <td className={styles.selectedBookTableAuthor}>
                      {book.bookAuthor}
                    </td>
                    <td className={styles.selectedBookTableYear}>
                      {book.bookYear}
                    </td>
                    <td className={styles.selectedBookTablePages}>
                      {book.bookPages}
                    </td>
                    <td>
                      <button
                        className={styles.selectedBookDelete}
                        onClick={() => this.deletBook(book.id)}
                      ></button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td className={styles.selectedBookTableBookName}>...</td>
              </tr>
            </tbody>
          </table>

          {this.state.selektedBooks.length > 0 && (
            <Link to="/statistics" className={styles.startTrainingButton}>
              Почати тренування
            </Link>
          )}
        </div>
        <div className={styles.bookStatisticContainer}>
          <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
          <StatisticsBlock
            countNumber={this.state.selektedBooks.length}
            title="Кількість книжок"
          />
          <StatisticsBlock
            countNumber={this.state.allDay}
            title="Кількість днів"
          />
        </div>
      </div>
    );
  }
}

export default StartTraining;
