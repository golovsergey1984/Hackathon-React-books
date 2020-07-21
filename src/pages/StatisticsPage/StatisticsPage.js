import React, { Component } from 'react';
import LineChart from '../../components/LineChart/LineChart';
import Statistic from '../../components/Statistic/Statistic.jsx'

export default class StatisticsPage extends Component {
  render() {
    return (
      <>
        {/* <div>STATISTICS PAGE</div> */}
        <Statistic/>
        <LineChart />
      </>
    );
  }
}
