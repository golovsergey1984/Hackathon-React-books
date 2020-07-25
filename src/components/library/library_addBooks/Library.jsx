import React from 'react';
import PropTypes from 'prop-types';
import styles from './librarylist.module.css';

const library = ({ author, title, year, pagesCount }) => (
  <div className={styles.wrapBooks}>
    <img
      className={styles.image}
      src={require('../../../assets/icons/book.svg')}
      alt="some img"
      width={24}
    />
    <div className={styles.secondBoxBooks}>
      <p className={styles.nameBook}>{title}</p>
      <p className={styles.authorBook}>{author}</p>
      <p className={styles.yearBook}>{year}</p>
      <p className={styles.storBook}>{pagesCount}</p>
    </div>
  </div>
);

library.defaultProps = {
  alt: 'library image',
};

library.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default library;
