import React from "react";
import styles from "./Timer.module.css";

const Timer = ({ items }) => (
  <div className={styles.timer}>
    <div className={styles.field}>
      <div className={styles.value}>00</div>
      <div className={styles.label}>дн </div>
    </div>
    <div style={{ fontSize: 22 }}>:</div>
    <div className={styles.field}>
      <div className={styles.value}>00</div>
      <div className={styles.label}>год </div>
    </div>
    <div style={{ fontSize: 22 }}>:</div>
    <div className={styles.field}>
      <div className={styles.value}>00</div>
      <div className={styles.label}>хв</div>
    </div>
    <div style={{ fontSize: 22 }}>:</div>
    <div className={styles.field}>
      <div className={styles.value}> 00</div>
      <div className={styles.label}>сек</div>
    </div>
  </div>
);

export default Timer;
