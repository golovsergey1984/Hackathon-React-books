// Компонент требует данных в виде:
// const factData = [
//     { date: '01.07.2020', pages: '15' },
//     { date: '02.07.2020', pages: '18' },
//     { date: '03.07.2020', pages: '20' },
//     { date: '04.07.2020', pages: '30' },
//     { date: '05.07.2020', pages: '19' },
//     { date: '06.07.2020', pages: '14' },
//   ];
// и к-во страниц в день pagesPerDay

import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    const { factData, pagesPerDay } = this.props;

    const labels = factData.map(rec => rec.date);
    const pagesFact = factData.map(rec => rec.pages);

    //Пока что План отображается прямой линией как количество страниц в день
    //Думаю над тем как реализовать логику расчета плана в зависимости от успевания или отставания от графика.
    const pagesPlan = [];
    pagesPlan.length = factData.length;
    pagesPlan.fill(pagesPerDay);

    const chartData = {
      labels: labels,

      datasets: [
        {
          label: 'План',
          data: pagesPlan,
          backgroundColor: ['rgba(12, 19, 54, 0.5)'],
          borderColor: ['rgba(12, 19, 54, 1)'],
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'Факт',
          data: pagesFact,
          backgroundColor: ['rgba(245, 167, 66, 0.5)'],
          borderColor: ['rgba(245, 167, 66, 1)'],
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    return (
      <div className="chart">
        <Line
          data={chartData}
          options={{
            legend: {
              display: true,
              position: 'top',
              align: 'end',
            },
            tooltips: {
              enabled: true,
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'КІЛЬКІСТЬ СТОРІНОК/ДЕНЬ',
                  },
                  ticks: {},
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
          }}
        />
      </div>
    );
  }
}
