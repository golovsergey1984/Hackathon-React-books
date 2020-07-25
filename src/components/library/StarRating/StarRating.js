import React from 'react';
import StarRating from 'react-svg-star-rating';
import styles from './StarRating.module.css';

const StarReactRating = ({ rating }) => {
  console.log('www', rating);
  return (
    <>
      <StarRating
        initialRating={rating}
        size={25}
        isReadOnly={true}
        containerClassName={styles.containerStar}
        hoverColor="rgb(236, 240, 29)"
      />
    </>
  );
};

export default StarReactRating;
