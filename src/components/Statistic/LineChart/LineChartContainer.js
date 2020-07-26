import { connect } from 'react-redux';
import LineChart from './LineChart';
import {
  getDataForChart,
  getTrainingDaysGoal,
  getTrainingAllPagesCount,
} from '../../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  factData: getDataForChart(state),
  pagesPerDay: Math.round(
    getTrainingAllPagesCount(state) / getTrainingDaysGoal(state),
  ),
});

export default connect(mapStateToProps)(LineChart);
