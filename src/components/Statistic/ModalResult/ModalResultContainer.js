import { connect } from 'react-redux';
import ModalResult from './ModalResult';
import {
  getTrainingAllPagesCount,
  getTrainingDaysLeft,
  getTrainingResultsPagesCount,
  getTrainingId,
} from '../../../redux/training/trainingSelectors';
import { toggleShowResultModalAction } from '../../../redux/modal/modalActions';
import { updateTrainingAction } from '../../../redux/training/trainingActions';
import { getIsShowResultModal } from '../../../redux/modal/modalSelectors';

const mapStateToProps = state => ({
  totalResultsCount: getTrainingResultsPagesCount(state),
  totalBooksPages: getTrainingAllPagesCount(state),
  daysLeft: getTrainingDaysLeft(state),
  trainingId: getTrainingId(state),
  isShowResultModal: getIsShowResultModal(state),
});

const mapDispatchToProps = {
  toggleShowResultModalAction,
  updateTrainingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalResult);
