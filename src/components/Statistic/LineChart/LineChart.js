import React from 'react';
import { Line } from 'react-chartjs-2';
import style from './LineChart.module.css';
import Result from '../Result/Result';

const LineChart = () => {
  const data = {
    labels: [
      '12.07.2020',
      '13.07.2020',
      '14.07.2020',
      '15.07.2020',
      '16.07.2020',
      '17.07.2020',
    ],
    datasets: [
      {
        label: 'План',
        data: [33, 24, 42, 35, 45, 44],
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgb(7, 36, 100)',
        pointBackgroundColor: 'rgb(7, 36, 100)',
      },
      {
        label: 'Факт',
        data: [22, 45, 32, 42, 32, 35],
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgb(255, 75, 97)',
        pointBackgroundColor: 'rgb(255, 75, 97)',
      },
    ],
  };

  const options = {
    // title: {
    //     display: true,
    //     text: 'кількість сторінок/день 34',
    // },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'КІЛЬКІСТЬ СТОРІНОК/ДЕНЬ',
          },
          ticks: {
            min: 1,
            max: 100,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'ЧАС',
          },
          ticks: {},
        },
      ],
    },
    legend: {
      display: true,
      align: 'end',
    },
  };

  return (
    <div className={style.box}>
      <div className={style.line}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
