import React, { Component } from 'react';
import Statistic from "../../components/Statistic/Statistic"
import LineChart from '../../components/LineChart/LineChart';
import Modal from "../../components/ModalResult/ModalResult"

export default class StatisticsPage extends Component {
  render() {
    return (
      <>
        <Statistic />
        <LineChart />
        <Modal />
      </>
    );
  }
}
