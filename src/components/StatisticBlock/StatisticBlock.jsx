import React from 'react';
import styles from './StatisticBlock.module.css';

const StatisticBlock = ({ countNumber, title }) => {
  return (
    <div className={styles.StatisticBlockContainer}>
      <div className={styles.statisticBlockCounter}>{countNumber}</div>
      <p className={styles.blockCounterLaibel}>{title}</p>
    </div>
  );
};

export default StatisticBlock;
