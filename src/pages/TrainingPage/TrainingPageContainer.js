import TrainingPage from './TrainingPage';
import { connect } from 'react-redux';
import { getPlannedBooks } from '../../redux/books/booksSelectors';
import {getBooksAction} from '../../redux/books/booksActions';
import {getTrainingId} from '../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  plannedBooks: getPlannedBooks(state),
  trainingId: getTrainingId(state),
});

const mapDispathToProps = dispatch => ({
    getAllBooks: () => dispatch(getBooksAction()),
  });

export default connect(mapStateToProps, mapDispathToProps)(TrainingPage);

  //TrainingPage
   
  