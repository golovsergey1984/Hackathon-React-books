import React from 'react';
import Statistics from './Statistics/Statistics';
import ResultForm from './ResultForm/ResultFormContainer';
import styles from './Result.module.css';

const Result = () => {
  return (
    <div className={styles.wrapper}>
      <ResultForm />
      <Statistics />
    </div>
  );
};
export default Result;
