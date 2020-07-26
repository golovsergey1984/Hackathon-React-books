import React from 'react';
import styles from './libraryTitle.module.css';

const LibraryTitle = ({ isReadBooks, title }) => (
  <div>
    <div className={styles.title}>{title}</div>
    <div className={styles.boxBooks}>
      <div className={styles.nameBook}>Назва книги</div>
      <div className={styles.authorBook}>Автор</div>
      <div className={styles.yearBook}>Рік</div>
      <div className={styles.storBook}>Стор.</div>
      {isReadBooks && <div className={styles.rating}>Рейтинг книги</div>}
    </div>
  </div>
);
export default LibraryTitle;
