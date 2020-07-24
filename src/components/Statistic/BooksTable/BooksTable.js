import React from 'react';
import styles from './BooksTable.module.css';

export default function BooksTable({ books }) {
  return (
    <table className={styles.selectedBookTable}>
      <thead>
        <tr>
          <th className={styles.selectedBookTableBookName}>Назва книги</th>
          <th className={styles.selectedBookTableAuthor}>Автор</th>
          <th className={styles.selectedBookTableYear}>Рік</th>
          <th className={styles.selectedBookTablePages}>Стор.</th>
        </tr>
      </thead>

      <tbody>
        {books.map(bookObj => (
          <tr key={bookObj.book.bookId}>
            {bookObj.book.isRead ? (
              <td className={styles.selectedBookTableBookNameChecked}>
                {bookObj.book.title}
              </td>
            ) : (
              <td className={styles.selectedBookTableBookNameEmpty}>
                {bookObj.book.title}
              </td>
            )}
            <td className={styles.selectedBookTableAuthor}>
              {bookObj.book.author}
            </td>
            <td className={styles.selectedBookTableYear}>
              {bookObj.book.year}
            </td>
            <td className={styles.selectedBookTablePages}>
              {bookObj.book.pagesCount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
