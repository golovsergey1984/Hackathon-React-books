import React, { Component } from "react";
import styles from "./library.module.css";

export default class LibraryList extends Component {
  state = { modal: false };

  handleModalChange = () => {
    this.setState((state) => ({ modal: !state.modal }));
    console.log(this.state.modal);
  };

  render() {
    const { books, isReadBooks } = this.props;
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
                {isReadBooks && <div>{book.rating}</div> && (
                  <div>
                    <button onClick={this.handleModalChange}>Резюме</button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
