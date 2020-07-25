import StatisticsPage from './StatisticsPage';
import { connect } from 'react-redux';
import { getTrainingAction } from '../../redux/training/trainingActions';
import {
  getTrainingAllPagesCount,
  getTrainingResultsPagesCount,
} from '../../redux/training/trainingSelectors';
import { toggleShowResultModalAction } from '../../redux/modal/modalActions';
import { getIsShowResultModal } from '../../redux/modal/modalSelectors';

const mapStateToProps = state => ({
  totalResultsCount: getTrainingResultsPagesCount(state),
  totalBooksPages: getTrainingAllPagesCount(state),
  isShowResultModal: getIsShowResultModal(state),
});

const mapDispatchToProps = {
  getTrainingAction,
  toggleShowResultModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
