import React from 'react';
import { Line } from 'react-chartjs-2';
import style from './LineChart.module.css';

const LineChart = ({ factData = [], pagesPerDay = 0 }) => {
  const labels = factData.map(rec => rec.dates);
  const pagesFact = factData.map(rec => rec.pages);

  const maxValue = Math.max(...pagesFact, pagesPerDay);

  //Пока что План отображается прямой линией как количество страниц в день
  //Думаю над тем как реализовать логику расчета плана в зависимости от успевания или отставания от графика.
  const pagesPlan = [];
  pagesPlan.length = factData.length;
  pagesPlan.fill(pagesPerDay);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'План',
        data: pagesPlan,
        backgroundColor: 'rgba(255, 0, 255, 0.1)',
        borderColor: 'rgb(7, 36, 100)',
        pointBackgroundColor: 'rgb(7, 36, 100)',
        fill: 'origin',
        borderWidth: 1,
        borderDash: [10, 15],
        pointBorderWidth: 1,
      },
      {
        label: 'Факт',
        data: pagesFact,
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
            max: Math.ceil(maxValue / 40) * 40,
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
