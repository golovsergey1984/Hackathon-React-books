import React from 'react';
import styles from './libraryTitle.module.css';

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
  console.log(styles);
  const classStor = isPlannedBooks ? styles.storBookPlanned : styles.storBook;
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles[status + '_boxBooks']}>
        <div className={styles.nameBook}>Назва книги</div>
        <div className={styles.authorBook}>Автор</div>
        <div className={styles.yearBook}>Рік</div>
        <div className={classStor}>Стор.</div>
        {isReadBooks && <div className={styles.rating}>Рейтинг книги</div>}
      </div>
    </div>
  );
};
export default LibraryTitle;
