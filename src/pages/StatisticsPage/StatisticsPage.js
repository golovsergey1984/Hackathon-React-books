import React, { Component } from 'react';
import LineChart from '../../components/Statistic/LineChart/LineChartContainer';
import Result from '../../components/Statistic/Result/Result';

import styles from './StatisticPage.module.css';
import Timer from '../../components/Statistic/timers/Timer';
import Goal from '../../components/Share/Goal/Goal';
import BooksTable from '../../components/Statistic/BooksTable/BooksTableContainer';
import ModalResult from '../../components/Statistic/ModalResult/ModalResultContainer';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import moment from 'moment';

export default class StatisticsPage extends Component {
  componentDidMount() {
    const { getTrainingAction } = this.props;
    getTrainingAction();
  }

  render() {
    const { haveTraining, isLoading, endOfTraining } = this.props;
    return (
      <>
        {isLoading ? (
          <Loader
            className={styles.loader}
            type="Oval"
            color="#ff6b09"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <>
            {!haveTraining && <Redirect to="/library" />}
            <div className={styles.startStatisticsMainContainer}>
              <div className={styles.startStatisticsContainer}>
                <div className={styles.calendarContainer}>
                  <Timer
                    title="До закінчення року залишилось"
                    targetDate={moment().endOf('year')}
                  />
                  <Timer
                    title="До досягнення мети залишилось"
                    targetDate={moment(endOfTraining)}
                  />
                </div>

                <BooksTable />
                <LineChart />
              </div>
              <div className={styles.rightContainer}>
                <Goal showBooksLeft={true} />
                <Result />
              </div>
            </div>
            <ModalResult />
          </>
        )}
      </>
    );
  }
}
