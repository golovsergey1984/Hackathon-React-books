import React, { Component } from 'react';
import Statistic from '../../components/Statistic/Statistic';
import LineChart from '../../components/Statistic/LineChart/LineChartContainer';
import Modal from '../../components/ModalResult/ModalResult';
import Result from '../../components/Statistic/Result/Result';

import styles from './StatisticPage.module.css';
import Timer from '../../components/Statistic/timers/Timer';
import Goal from '../../components/Share/Goal/Goal';
import BooksTable from '../../components/Statistic/BooksTable/BooksTableContainer';

export default class StatisticsPage extends Component {
  componentDidMount() {
    const { getTrainingAction } = this.props;
    getTrainingAction();
  }
  render() {
    return (
      <div className={styles.startStatisticsMainContainer}>
        <div className={styles.startStatisticsContainer}>
          <div className={styles.calendarContainer}>
            <Timer />
            <Timer />
          </div>

          <BooksTable />
          <LineChart />
        </div>
        <div className={styles.rightContainer}>
          <Goal showBooksLeft={true} />
          <Result />
        </div>
      </div>

      // <>
      //   <Statistic />
      //   <LineChart />
      //   <Result />
      //   <Modal />
      // </>
    );
  }
}
