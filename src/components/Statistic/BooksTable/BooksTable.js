import React, { Component } from 'react';
import styles from './BooksTable.module.css';
import { pnotifyAbout } from '../../../services/helpers';

export default class BooksTable extends Component {
  handleChange = e => {
    const { name, checked, value } = e.target;
    const { resultPagesCount, checkedPagesCount, trainingId } = this.props;
    if (value <= resultPagesCount - checkedPagesCount || !checked) {
      const checkBookInfo = {
        trainingBookId: name,
        trainingId: trainingId,
        data: { isRead: checked },
      };
      this.props.toggleIsBookReadAction(checkBookInfo);
    } else {
      pnotifyAbout('Недостатня кількість прочитаних сторінок.');
    }
  };

  render() {
    const { books } = this.props;

    return (
      <table className={styles.selectedBookTable}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            <th className={styles.selectedBookTableBookName}>Назва книги</th>
            <th className={styles.selectedBookTableAuthor}>Автор</th>
            <th className={styles.selectedBookTableYear}>Рік</th>
            <th className={styles.selectedBookTablePages}>Стор.</th>
          </tr>
        </thead>

        <tbody className={styles.body}>
          {books.map(({ book, isRead, trainingBookId }) => (
            <tr key={book.bookId} className={styles.row}>
              <td className={styles.checkboxContainer}>
                <label>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name={trainingBookId}
                    checked={isRead}
                    value={book.pagesCount}
                    onChange={this.handleChange}
                  />
                  <p className={styles.fakeCheckbox} />
                </label>
              </td>

              <td className={styles.selectedBookTableBookName}>{book.title}</td>
              <td className={styles.selectedBookTableAuthor}>{book.author}</td>
              <td className={styles.selectedBookTableYear}>{book.year}</td>
              <td className={styles.selectedBookTablePages}>
                {book.pagesCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
