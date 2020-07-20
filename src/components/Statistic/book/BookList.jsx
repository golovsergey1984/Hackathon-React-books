import React from "react";
import PropTypes from "prop-types";
import styles from "./BookList.module.css"

const BookList = ({items}) => (
  <div className={styles.bg}>
  <table className={styles["books"]}>
    <thead>
      <tr className={styles.tHead}>
      <th colSpan="2" className={styles.tHeadItem}>
            Назва книги
          </th>
          <th className={styles.tHeadItem}>Автор</th>
          <th className={styles.tHeadItem}>Рік</th>
          <th className={styles.tHeadItem}>Сторінки</th>
      </tr>
    </thead>

    <tbody>
    {items.map(({ id, title, author, year, sheets }) => (
          <tr key={id}>
            <td className={styles.tContain}>
              <span className={styles.label}></span>
            </td>
            <td className={styles.tContain}>{title}</td>
            <td className={styles.tContain}>{author}</td>
            <td className={styles.tContain}>{year}</td>
            <td className={styles.alignCenter}>{sheets}</td>
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