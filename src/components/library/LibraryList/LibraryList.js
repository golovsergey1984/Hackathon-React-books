import React, { Component } from 'react';
import styles from './libraryList.module.css';
import { connect } from 'react-redux';
import { toggleShowBookReviewModalAction } from '../../../redux/modal/modalActions';
import StarReactRating from '../StarRating/StarRating';
import { ReactComponent as LibLogo } from '../../../assets/icons/book.svg';

class LibraryList extends Component {
  render() {
    const {
      books,
      isReadBooks,
      toggleBookReviewModal,
      onClickResume,
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
      </ul>
    );
  }
}

const mSTP = state => ({});

const mDTP = dispatch => ({
  toggleBookReviewModal: () => dispatch(toggleShowBookReviewModalAction()),
});

export default connect(mSTP, mDTP)(LibraryList);
