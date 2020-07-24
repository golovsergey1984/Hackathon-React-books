import { connect } from 'react-redux';
import LineChart from './LineChart';
import { getDataForChart } from '../../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  factData: getDataForChart(state),
  pagesPerDay: 25,
});

export default connect(mapStateToProps)(LineChart);
