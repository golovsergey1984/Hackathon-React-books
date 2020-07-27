import StatisticsPage from './StatisticsPage';
import { connect } from 'react-redux';
import { getTrainingAction } from '../../redux/training/trainingActions';
import { getTrainingTimeEnd } from '../../redux/training/trainingSelectors';
import { getIsShowResultModal } from '../../redux/modal/modalSelectors';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  haveTraining: !!state.training?.trainingId,
  endOfTraining: getTrainingTimeEnd(state),
  isShowResultModal: getIsShowResultModal(state),
});

const mapDispatchToProps = {
  getTrainingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
