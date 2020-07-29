import React from 'react';
import styles from './libraryTitle.module.css';
import PropTypes from 'prop-types';

const bookStatus = status => {
  if (status === 'planned') {
    return 'planned';
  } else if (status === 'reading') {
    return 'reading';
  } else if (status === 'readed') {
    return 'readed';
  }
};

const LibraryTitle = ({ isReadBooks, isPlannedBooks, title, books }) => {
  const status = bookStatus(books[0].status);
  const classStor = isPlannedBooks ? styles.storBookPlanned : styles.storBook;
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrapperTitle}>
        <div className={styles[status + '_boxBooks']}>
          <div className={styles.nameBook}>Назва книги</div>
          <div className={styles.authorBook}>Автор</div>
          <div className={styles.yearBook}>Рік</div>
          <div className={classStor}>Стор.</div>
        </div>
        {isReadBooks && <div className={styles.rating}>Рейтинг книги</div>}
      </div>
    </div>
  );
};

LibraryTitle.propTypes = {
  isReadBooks: PropTypes.bool.isRequired,
  isPlannedBooks: PropTypes.bool,
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default LibraryTitle;
