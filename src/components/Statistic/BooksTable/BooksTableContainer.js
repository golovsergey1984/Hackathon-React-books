import { connect } from 'react-redux';
import BooksTable from './BooksTable';
import {
  getTrainingBooks,
  getTrainingResultsPagesCount,
  getTrainingReadPagesCount,
  getTrainingId,
} from '../../../redux/training/trainingSelectors';
import { toggleIsBookReadAction } from '../../../redux/training/trainingActions';

const mapStateToProps = state => ({
  books: getTrainingBooks(state) || [],
  resultPagesCount: getTrainingResultsPagesCount(state),
  checkedPagesCount: getTrainingReadPagesCount(state),
  trainingId: getTrainingId(state),
});

const mapDispatchToProps = {
  toggleIsBookReadAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable);
