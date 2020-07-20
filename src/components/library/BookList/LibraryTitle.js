import React from "react";
import styles from "./library.module.css";

const LibraryTitle = ({ isReadBooks }) => (
  <div className={styles.wrap}>
    <div className={styles.title}>Прочитано</div>
    <div className={styles.inner}>
      <div className={styles.title_name}>Назва книги</div>
      <div className={styles.title_author}>Автор</div>
      <div className={styles.title_year}>Рік</div>
      <div className={styles.title_page}>Стор.</div>
      {isReadBooks && <div>Рейтинг книги</div>}
    </div>
  </div>
);

export default LibraryTitle;
