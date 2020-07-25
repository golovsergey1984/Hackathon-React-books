import React from 'react';
import styles from './Result.module.css';
import Statistics from './Statistics/Statistics';
import ResultForm from './ResultForm/ResultFormContainer';

const Result = () => {
  return (
    <div className={styles.wrapper}>
      <ResultForm />
      <Statistics />
    </div>
  );
};
export default Result;
