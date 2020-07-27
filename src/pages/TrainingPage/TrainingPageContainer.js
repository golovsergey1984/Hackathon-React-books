import TrainingPage from './TrainingPage';
import { connect } from 'react-redux';
import { getPlannedBooks } from '../../redux/books/booksSelectors';
import { getBooksAction } from '../../redux/books/booksActions';

const mapStateToProps = state => ({
  plannedBooks: getPlannedBooks(state),
  isLoading: state.isLoading,

  haveTraining: state.session.user.haveTraining,
});

const mapDispathToProps = dispatch => ({
  getAllBooks: () => dispatch(getBooksAction()),
});

export default connect(mapStateToProps, mapDispathToProps)(TrainingPage);
