import moment from 'moment';
import styles from './Statistics.module.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSortedResults } from '../../../../redux/training/trainingSelectors';

export class Statistics extends Component {
  render() {
    const { sortedData } = this.props;
    return (
      <div className={styles.resultSection}>
        <h3 className={styles.title}>статистика</h3>
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <tbody>
              {sortedData &&
                sortedData.map(row => (
                  <tr className={styles.tr} key={row._id}>
                    <td className={styles.date}>
                      {moment(row.date).format('DD.MM.YYYY')}
                    </td>
                    <td className={styles.time}>
                      {moment(row.date).format('HH:mm:ss')}
                    </td>
                    <td className={styles.pages}>
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
  }
}

const mapStateToProps = state => ({
  sortedData: getSortedResults(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
