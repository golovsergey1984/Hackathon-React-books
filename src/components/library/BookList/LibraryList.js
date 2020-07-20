import React, { Component } from "react";
import styles from "./library.module.css";

export default class LibraryList extends Component {
  state = { modal: false };
  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map((book) => (
          <li key={book.id} className={styles.list}>
            <div className={styles.container}>
              <img className={styles.image} width={25} />
              <div className={styles.box}>
                <div className={styles.name}>{book.title}</div>
                <div className={styles.author}>{book.author}</div>
                <div className={styles.year}>{book.year}</div>
                <div className={styles.pages}>{book.pages}</div>
                {/* <div>{book.rating}</div>
                <div>
                  <button onClick={this.handleModalChange}></button>
                </div> */}
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
