import React from "react";
import PropTypes from "prop-types";
import Library from "./Library";
import styles from "./library.module.css";

const LibraryList = ({ items = [] }) => (
  <ul>
    {items.map((item) => (
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

export default LibraryList;
