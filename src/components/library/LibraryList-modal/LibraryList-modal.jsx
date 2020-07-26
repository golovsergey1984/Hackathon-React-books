import React from 'react';
import ReactStars from 'react-rating-stars-component';
// import PropTypes from "prop-types";
import styles from './LibraryList-modal.module.css';

const LibraryListModal = ({
  ratingValue = 0,
  onChangeRating,
  onChangeResume,
}) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <form id="rating" method="POST" className={styles.Modal_form}>
          <div className={styles.Modal_section}>
            <h2 className={styles.Modal_section__title}>
              Обрати рейтинг книги
            </h2>
            <ReactStars
              classNames={styles.Modal_section__rating}
              count={5}
              value={ratingValue}
              size={18}
              onChange={onChangeRating}
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
              onChange={onChangeResume}
            ></textarea>
          </div>
          <div className={styles.Modal_section_buttons}>
            <button
              className={styles.Modal_section__button_reset}
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
};

export default LibraryListModal;
