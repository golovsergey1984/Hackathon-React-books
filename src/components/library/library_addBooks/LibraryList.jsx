import React from 'react';
import PropTypes from 'prop-types';
import Library from './Library';
import { connect } from 'react-redux';
import { getPlannedBooks } from '../../../redux/books/booksSelectors';

import styles from './librarylist.module.css';

const LibraryList = ({ items }) => (
  <ul className={styles.mainBox}>
    {items.map(item => (
      <li key={item.id} className={styles.list}>
        <Library {...item} />
      </li>
    ))}
  </ul>
);

LibraryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

const mapStateToProps = state => ({
  items: getPlannedBooks(state),
});

export default connect(mapStateToProps)(LibraryList);
