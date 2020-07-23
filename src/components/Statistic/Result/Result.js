import React from 'react';
import styles from './Result.module.css';
import Statistics from './Statistics/Statistics';
import ResultForm from './ResultForm/ResultForm';

const Result = () => {
  return (
    <div className={styles.wrapper}>
      <ResultForm />
      <Statistics
        sortedData={[
          {
            _id: '5f12e3154528bf0e274749cf',
            date: '2020-07-18T11:54:51.000Z',
            count: 10,
          },
          {
            _id: '5f13112053892b0e140b282b',
            date: '2020-07-18T00:00:00.000Z',
            count: 10,
          },
        ]}
      />
    </div>
  );
};
export default Result;
