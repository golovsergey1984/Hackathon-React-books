import React from 'react';
import moment from 'moment';
import css from './Statistics.module.css';

const Statistics = ({ sortedData }) => {
  return (
    <div className={css.resultSection}>
      <h3 className={css.title}>статистика</h3>
      <div className={css.wrapper}>
        <table className={css.table}>
          <tbody>
            {sortedData.map(row => (
              <tr key={row.id}>
                <td className={css.date}>
                  {moment(row.date).format('DD.MM.YYYY')}
                </td>
                <td className={css.time}>
                  {moment(row.date).format('HH:mm:ss')}
                </td>
                <td className={css.pages}>
                  {row.count}
                  <span>стор.</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
