import React from "react";
import PropTypes from "prop-types";
import styles from "./BookList.module.css"

const BookList = ({items}) => (
  <div className={styles.bg}>
  <table className={styles["books"]}>
    <thead>
      <tr className={styles.tHead}>
        <th></th>
        <th>Назва книги</th>
        <th>Автор</th>
        <th>Рік</th>
        <th>Стор.</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({id,readed, title, author, year, sheets}) => (
        <tr key={id}>
          <td className={styles.tBlock}> {readed}</td>
          <td className={styles.tContain}>{title}</td>
          <td className={styles.tContain}>{author}</td>
          <td className={styles.tContain}>{year}</td>
          <td className={styles.tContain}>{sheets}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
)

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.string,
      sheets: PropTypes.string
    })
  )
};

export default BookList;