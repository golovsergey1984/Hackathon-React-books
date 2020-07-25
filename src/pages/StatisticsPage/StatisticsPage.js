import React, { Component } from 'react';
import LineChart from '../../components/Statistic/LineChart/LineChartContainer';
import Result from '../../components/Statistic/Result/Result';

import styles from './StatisticPage.module.css';
import Timer from '../../components/Statistic/timers/Timer';
import Goal from '../../components/Share/Goal/Goal';
import BooksTable from '../../components/Statistic/BooksTable/BooksTableContainer';
import ModalResult from '../../components/ModalResult/ModalResultContainer';

export default class StatisticsPage extends Component {
  componentDidUpdate() {
    const {
      totalResultsCount,
      totalBooksPages,
      toggleShowResultModalAction,
    } = this.props;

    if (totalResultsCount >= totalBooksPages) {
      toggleShowResultModalAction();
    }
  }
  componentDidMount() {
    const { getTrainingAction } = this.props;
    getTrainingAction();
  }
  render() {
    const { isShowResultModal } = this.props;
    return (
      <>
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
        {/* <ModalResult /> */}
      </>
    );
  }
}
