import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Statistic.module.css';
import BookList from './book/BookList';
import books from './book/books.json';
import Timer from './timers/Timer';

class Statistic extends Component {
  render() {
    //вводим дату к которой отчисляем оставшееся время, потом передаем в таймер как пропсы
    const targetDateFirstTimer = new Date('Jan 01, 2021');
    const targetDateSecondTimer = new Date('2020-07-31');
    return (
      <section className={styles.sectionStatistic}>
        <div className={styles.sectionBook}>
          <ul className={styles.sectionTimer}>
            <li>
              <span className={styles.span}>До закінчення року залишилось</span>
              <Timer targetDate={targetDateFirstTimer} />
            </li>
            <li>
              <span className={styles.span}>До досягнення мети залишилось</span>
              <Timer targetDate={targetDateSecondTimer} />
            </li>
          </ul>
          <BookList items={books} />
          <div className={styles.sectionRes}>
            <p>Кількість сторінок / день - </p>
            <p>13</p>
          </div>
        </div>
        <div className={styles.sectionGoal}>
          <ul className={styles.goalList}>
            <li className={styles.goals}>
              <div className={styles.goalTitle}>Моя мета прочитати</div>
              <ul className={styles.goalBlock}>
                <li className={styles.goalTxt}>
                  <div className={styles.goalRes}>3</div>
                  <p>Кількість книжок</p>
                </li>
                <li className={styles.goalTxt}>
                  <div className={styles.goalRes}>28</div>
                  <p>Кількість днів</p>
                </li>
                <li className={styles.goalTxt}>
                  <div
                    className={styles.goalRes}
                    style={{ color: 'orangered' }}
                  >
                    3
                  </div>
                  <p>Залишилось книжок</p>
                </li>
              </ul>
            </li>
            <li className={styles.goals}>
              <div className={styles.resultTitle}>Результати</div>
              <ul className={styles.resultBlock}>
                <li>
                  Дата
                  <input className={styles.resultList}></input>
                </li>
                <li>
                  К-ть сторінок
                  <input className={styles.resultList}></input>
                </li>
              </ul>
              <button className={styles.resultBtn}>Додати результат</button>
              <p className={styles.resultTxt}>Статистика</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default connect()(Statistic);
