//Core
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//Components
import Timer from '../../components/Statistic/Timer/Timer';
import Goal from '../../components/Share/Goal/Goal';
import BooksTable from '../../components/Statistic/BooksTable/BooksTableContainer';
import Result from '../../components/Statistic/Result/Result';
import LineChart from '../../components/Statistic/LineChart/LineChartContainer';
import ModalResult from '../../components/Statistic/ModalResult/ModalResultContainer';
//Libraries
import Loader from 'react-loader-spinner';
import moment from 'moment';
//Styles
import styles from './StatisticPage.module.css';

export default class StatisticsPage extends Component {
  render() {
    const { haveTraining, isLoading, endOfTraining } = this.props;
    console.log(haveTraining);
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
