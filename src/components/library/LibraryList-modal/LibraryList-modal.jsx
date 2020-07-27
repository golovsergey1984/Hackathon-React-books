import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux';
import { toggleShowBookReviewModalAction } from '../../../redux/modal/modalActions';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
// import PropTypes from "prop-types";
import styles from './LibraryList-modal.module.css';

// const initialState = {
//   rating: 0,
//   comment: '',
// };

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

  handleChangeRating(value) {
    this.setState({
      rating: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { rating, comment } = this.state;
    return (
      <div className={styles.Overlay} id={'BookReviewModal'}>
        <div className={styles.Modal}>
          <form
            id="rating"
            className={styles.Modal_form}
            onSubmit={this.handleSubmit}
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
                // onChange={this.handleChangeRating}
                activeColor="#ff6c00"
                isHalf="false"
              />
            </div>
            <div className={styles.Modal_section}>
              <h2 className={styles.Modal_section__title}>Резюме</h2>
              <textarea
                className={styles.Modal_section__textarea}
                placeholder="..."
                name="text_rating"
                // onChange={onChangeResume}
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
});

export default connect(mSTP, mDTP)(LibraryListModal);
