import { connect } from 'react-redux';
import BooksTable from './BooksTable';
import { getTrainingBooks } from '../../../redux/training/trainingSelectors';

const mapStateToProps = state => ({
  books: getTrainingBooks(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable);
