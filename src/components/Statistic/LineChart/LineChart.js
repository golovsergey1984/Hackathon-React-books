import React from 'react';
import { Line } from 'react-chartjs-2';
import style from './LineChart.module.css';

const LineChart = ({ factData = [], pagesPerDay = 0 }) => {
  const labels = factData.map(rec => rec.date);
  const pagesFact = factData.map(rec => rec.pages);

  const maxValue = Math.max(...pagesFact, pagesPerDay);
  //Пока что План отображается прямой линией как количество страниц в день
  //Думаю над тем как реализовать логику расчета плана в зависимости от успевания или отставания от графика.
  const pagesPlan = [];
  pagesPlan.length = factData.length;
  pagesPlan.fill(pagesPerDay);
  // const pagesPlan = [pagesPerDay];

  // factData.map((rec, index) => {
  //   let temp = pagesPlan[index] - rec.pages + pagesPerDay;
  //   temp = temp < 0 ? 0 : temp;
  //   pagesPlan.push(temp);
  // });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'План',
        data: pagesPlan,
        backgroundColor: 'rgba(45,142, 229, 0.1)',
        borderColor: 'rgba(45,142, 229)',
        pointBackgroundColor: 'rgba(45,142, 229)',
        fill: 'origin',
        borderWidth: 2,
        // borderDash: [10, 15],
        pointBorderWidth: 1,
        pointRadius: 0,
      },
      {
        label: 'Факт',
        data: pagesFact,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgb(250, 71, 112)',
        pointBackgroundColor: 'rgb(250, 71, 112)',
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
            max: Math.ceil(maxValue / 20) * 20,
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
