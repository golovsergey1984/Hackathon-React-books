import React, { Component } from 'react';
import styles from './libraryList.module.css';
import StarReactRating from '../StarRating/StarRating';
import PropTypes from 'prop-types';

class LibraryList extends Component {
  render() {
    const { books, isReadBooks, onClickResume } = this.props;

    return (
      <ul className={styles.mainBox}>
        {books.map(book => (
          <li key={book._id} className={styles.list}>
            <div className={styles.wrapBooks}>
              <LibLogo className={styles[book.status]} />
              <div className={styles.secondBoxBooks}>
                <div className={styles.nameBook}>{book.title}</div>
                <div className={styles.authorBook}>{book.author}</div>
                <div className={styles.yearBook}>{book.year}</div>
                <div className={styles.storBook}>{book.pagesCount}</div>
                {isReadBooks && (
                  <div className={styles.rating}>
                    <StarReactRating rating={book.rating} />
                    <button
                      data-bookid={book._id}
                      className={styles.button}
                      onClick={() => onClickResume(book._id)}
                    >
                      Резюме
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
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
