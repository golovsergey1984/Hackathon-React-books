import React, { Component } from 'react';
import styles from './libraryList.module.css';
import StarReactRating from '../StarRating/StarRating';

export default class LibraryList extends Component {
  handleModalChange = () => {
    this.props.onModalChange(true);
  };

  render() {
    const { books, isReadBooks } = this.props;

    return (
      <div className={styles.mainBox}>
        {books.map(book => (
          <li key={book.id} className={styles.list}>
            <div className={styles.wrapBooks}>
              <img
                className={styles.image}
                src={require('../../../assets/icons/book.svg')}
                alt="some img"
                width={24}
              />
              <div className={styles.secondBoxBooks}>
                <div className={styles.nameBook}>{book.title}</div>
                <div className={styles.authorBook}>{book.author}</div>
                <div className={styles.yearBook}>{book.year}</div>
                <div className={styles.storBook}>{book.pagesCount}</div>
                {isReadBooks && (
                  <div className={styles.rating}>
                    <StarReactRating rating={book.rating} />
                    <button
                      className={styles.button}
                      onClick={this.handleModalChange}
                    >
                      Резюме
                    </button>
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
