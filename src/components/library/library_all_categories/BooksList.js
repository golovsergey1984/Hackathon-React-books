import React, { Component } from "react";
import styles from "./bookList.module.css";

export default class BooksList extends Component {
  state = { modal: false };

  handleToggle = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    const { isRead, isReading, willRead } = this.props;
    return (
      <div>
        <div className={styles.bookLibrary}>
          <h2 className={styles.readState}>Прочитано</h2>
          <div className={styles.description1}>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
            <p>Рейтинг книги</p>
          </div>
          <div className={styles.bookList}>
            {isRead.map((book) => (
              <li key={book.id} className={styles.bookDescr}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
                <p>{book.stars}</p>
                <button onChange={this.handleToggle}>Резюме</button>
              </li>
            ))}
          </div>
        </div>
        <div className={styles.bookLibrary}>
          <h2 className={styles.readState}>Читаю</h2>
          <div className={styles.description2}>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
          </div>
          <div>
            {isReading.map((book) => (
              <li key={book.id} className={styles.bookDescr}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
              </li>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.readState}>Маю намір прочитати</h2>
          <div className={styles.description2}>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
          </div>
          <div>
            {willRead.map((book) => (
              <li key={book.id} className={styles.bookDescr}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
