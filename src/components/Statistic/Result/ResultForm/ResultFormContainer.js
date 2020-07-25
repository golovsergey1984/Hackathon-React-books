import { connect } from 'react-redux';
import ResultForm from './ResultForm';
import { addResultAction } from '../../../../redux/training/trainingActions';
import {
  getTrainingId,
  getTrainingTimeStart,
} from '../../../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  trainingId: getTrainingId(state),
  timeStart: getTrainingTimeStart(state),
});

const mapDispatchToProps = {
  addResultAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultForm);
