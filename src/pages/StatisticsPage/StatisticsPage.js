import React, { Component } from 'react';
import Statistic from '../../components/Statistic/Statistic';
import LineChart from '../../components/Statistic/LineChart/LineChart';
import Modal from '../../components/ModalResult/ModalResult';
import Result from '../../components/Statistic/Result/Result';

export default class StatisticsPage extends Component {
  render() {
    return (
      <>
        {/* <Statistic /> */}
        {/* <LineChart /> */}
        <Result />
        {/* <Modal /> */}
      </>
    );
  }
}
