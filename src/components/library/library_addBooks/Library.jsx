import React from 'react';
/* import imgBook from './images/3043907.svg'; */
import PropTypes from 'prop-types';
// import styles from './library.module.css';
import styles from './librarylist.module.css';

// const library = ({ author, title, year, pagesCount }) => (
//   <div className={styles.container}>
//     <img
//       className={styles.image}
//       src={require('../../../assets/icons/book.svg')}
//       alt="some img"
//     />
//     <div className={styles.box}>
//       <p className={styles.name}>{title}</p>
//       <p className={styles.avtor}>{author}</p>
//       <p className={styles.year}>{year}</p>
//       <p className={styles.pages}>{pagesCount}</p>
//     </div>
//   </div>
// );

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
