import React from 'react';
import imgBook from './images/3043907.svg';
import PropTypes from 'prop-types';
import styles from './library.module.css';

const library = ({ author, title, year, pagesCount }) => (
  <div className={styles.container}>
    <img className={styles.image} src={imgBook} width={25} />
    <div className={styles.box}>
      <p className={styles.name}>{title}</p>
      <p className={styles.avtor}>{author}</p>
      <p className={styles.year}>{year}</p>
      <p className={styles.pages}>{pagesCount}</p>
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
