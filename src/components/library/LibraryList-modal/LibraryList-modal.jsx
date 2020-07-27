import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux';
import { toggleShowBookReviewModalAction } from '../../../redux/modal/modalActions';
import { updateBookAction } from '../../../redux/books/booksActions';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import PropTypes from 'prop-types';
import styles from './LibraryList-modal.module.css';

class LibraryListModal extends Component {
  state = {
    rating: 0,
    comment: '',
  };

  targetElement = null;

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
    this.targetElement = document.querySelector('#BookReviewModal');
    disableBodyScroll(this.targetElement);

    const { books, bookId } = this.props;
    const choosenBook = books.filter(book => book.id === bookId);
    const [{ rating, comment }] = choosenBook;
    this.setState({
      rating,
      comment,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
    enableBodyScroll(this.targetElement);
    clearAllBodyScrollLocks();
  }

  onEscapePress = event => {
    if (event.key !== 'Escape') {
      return;
    }

    this.props.toggleBookReviewModal();
  };

  onBackToLibraryClick = event => {
    if (event.target.id !== 'backToLibrary') {
      return;
    }
    this.props.toggleBookReviewModal();
  };

  handleChangeRating = rating => {
    this.setState({
      rating,
    });
  };

  handleChangeResume = event => {
    const comment = event.target.value;
    this.setState({
      comment,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { bookId, updateBookAction } = this.props;
    const bookData = [{ ...this.state }];

    updateBookAction(bookId, bookData);
  };

  render() {
    console.log(this.props);
    const { rating, comment } = this.state;

    return (
      <div className={styles.Overlay} id={'BookReviewModal'}>
        <div className={styles.Modal}>
          <form
            id="rating"
            onSubmit={this.handleSubmit}
            className={styles.Modal_form}
          >
            <div className={styles.Modal_section}>
              <h2 className={styles.Modal_section__title}>
                Обрати рейтинг книги
              </h2>
              <ReactStars
                classNames={styles.Modal_section__rating}
                count={5}
                value={rating}
                size={18}
                edit={true}
                onChange={this.handleChangeRating}
                activeColor="#ff6c00"
                isHalf={false}
              />
            </div>
            <div className={styles.Modal_section}>
              <h2 className={styles.Modal_section__title}>Резюме</h2>
              <textarea
                className={styles.Modal_section__textarea}
                placeholder="..."
                name="comment"
                value={comment}
                onChange={this.handleChangeResume}
              ></textarea>
            </div>
            <div className={styles.Modal_section_buttons}>
              <button
                className={styles.Modal_section__button_reset}
                onClick={this.onBackToLibraryClick}
                id={'backToLibrary'}
                type="button"
              >
                Назад
              </button>
              <button
                className={styles.Modal_section__button_submit}
                form="rating"
                type="submit"
              >
                Зберегти
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({});

const mDTP = dispatch => ({
  toggleBookReviewModal: () => dispatch(toggleShowBookReviewModalAction()),
  updateBookAction: () => dispatch(updateBookAction()),
});

LibraryListModal.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    pagesCount: PropTypes.number.isRequired,
    comment: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.string.isRequired,
  }),
  bookId: PropTypes.number.isRequired,
  toggleBookReviewModal: PropTypes.func.isRequired,
  updateBookAction: PropTypes.func.isRequired,
};

export default connect(mSTP, mDTP)(LibraryListModal);
