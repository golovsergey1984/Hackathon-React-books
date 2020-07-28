import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './libraryList.module.css';
import StarReactRating from '../StarRating/StarRating';
import { ReactComponent as LibLogo } from '../../../assets/icons/book.svg';

class LibraryList extends Component {
  render() {
    const {
      books,
      isReadBooks,
      onClickResume,
      onRemoveBookFromList,
      canBeDeleted,
    } = this.props;

    return (
      <ul className={styles.mainBox}>
        {books.map(book => (
          <li key={book._id} className={styles.list}>
            <div className={styles.wrapBooks}>
              <LibLogo
                className={styles[book.status]}
                // src={require('../../../assets/icons/book.svg')}
                // alt="some img"
                // width={24}
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
                      data-bookid={book._id}
                      className={styles.button}
                      onClick={() => onClickResume(book._id)}
                    >
                      Резюме
                    </button>
                  </div>
                )}
                {canBeDeleted && (
                  <button
                    className={styles.selectedBookDelete}
                    onClick={() => onRemoveBookFromList(book._id)}
                  ></button>
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
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      pagesCount: PropTypes.number.isRequired,
      comment: PropTypes.string,
      rating: PropTypes.number,
      status: PropTypes.string.isRequired,
    }),
  ),
};

export default LibraryList;
