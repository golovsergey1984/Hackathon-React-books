import StatisticsPage from './StatisticsPage';
import { connect } from 'react-redux';
import { getTrainingAction } from '../../redux/training/trainingActions';
import { loginAction } from '../../redux/session/sessionActions';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getTrainingAction,
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
