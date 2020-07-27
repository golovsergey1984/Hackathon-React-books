import React, { Component } from 'react';
import styles from './libraryList.module.css';

import StarReactRating from '../StarRating/StarRating';
import PropTypes from 'prop-types';

class LibraryList extends Component {
  render() {
    const { books, isReadBooks, onClickResume } = this.props;

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
                      data-bookid={book.id}
                      className={styles.button}
                      onClick={onClickResume}
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

LibraryList.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    pagesCount: PropTypes.number.isRequired,
    comment: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.string.isRequired,
  }),
  onClickResume: PropTypes.func.isRequired,
  isReadBooks: PropTypes.bool.isRequired,
};

export default LibraryList;
