import React from 'react';
import StarRating from 'react-svg-star-rating';
import styles from './StarRating.module.css';
import PropTypes from 'prop-types';

const StarReactRating = ({ rating }) => {
  return (
    <>
      <StarRating
        initialRating={rating}
        size={20}
        isReadOnly={true}
        containerClassName={styles.containerStar}
        hoverColor="rgb(236, 240, 29)"
      />
    </>
  );
};

StarReactRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarReactRating;
