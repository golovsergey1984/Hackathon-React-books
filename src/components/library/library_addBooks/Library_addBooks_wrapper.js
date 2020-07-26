import React from 'react';
import styles from './library.module.css';

const library_addBooks = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrap}>
      <h3 className={styles.title}>Маю намір прочитати</h3>
      <div className={styles.inner}>
        <p className={styles.title_name}>Назва книги</p>
        <p className={styles.title_avtor}>Автор</p>
        <p className={styles.title_year}>Рік</p>
        <p className={styles.title_page}>Стор.</p>
      </div>
    </div>
    <section>{children}</section>
    <button className={styles.button}>далі</button>
  </div>
);
export default library_addBooks;
