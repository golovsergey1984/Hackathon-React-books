import TrainingPage from './TrainingPage';
import { connect } from 'react-redux';
import { getPlannedBooks } from '../../redux/books/booksSelectors';
import {getBooksAction} from '../../redux/books/booksActions'

const mapStateToProps = state => ({
  plannedBooks: getPlannedBooks(state),
});

const mapDispathToProps = () => ({
    // getAllBooks: () => dispatch(getBooksAction()),
    getBooksAction
  });

export default connect(mapStateToProps, mapDispathToProps)(TrainingPage);
