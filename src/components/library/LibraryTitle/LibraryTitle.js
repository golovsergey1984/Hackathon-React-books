import React from 'react';
import styles from './libraryTitle.module.css';

const LibraryTitle = ({ isReadBooks, isPlannedBooks, title }) => {
  const classStor = isPlannedBooks ? styles.storBookPlanned : styles.storBook;
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.boxBooks}>
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
