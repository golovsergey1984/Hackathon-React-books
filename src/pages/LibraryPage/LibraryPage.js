import React, { Component } from 'react';
import styles from './LibraryPage.module.css';
import {
  getReadedBooks,
  getReadingBooks,
  getAllBooksInLibrary,
  getPlannedBooks,
} from '../../redux/books/booksSelectors';
import {
  getBooksAction,
  deleteBookAction,
} from '../../redux/books/booksActions';
import { toggleShowBookReviewModalAction } from '../../redux/modal/modalActions';
//Components
import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryTitle from '../../components/Library/LibraryTitle/LibraryTitle';
import AddBookForm from '../../components/Library/AddBookForm/AddBookForm';
import EmptyList from '../../components/Library/EmptyList/EmptyList';
import LibraryListModal from '../../components/Library/LibraryList-modal/LibraryList-modal';
// import ToReadList from '../../components/library/library_addBooks/Library_addBooks';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class LibraryPage extends Component {
  state = {
    choosenBookId: null,
  };

  componentDidMount() {
    this.props.getAllBooks();
  }

  handleClickResume = id => {
    this.props.toggleBookReviewModal();
    this.setState({ choosenBookId: id });
  };

  render() {
    const {
      books,
      readBooks,
      readingBooks,
      plannedBooks,
      isBookReviewModalOpen,
      deleteBookAction,
    } = this.props;

    const { choosenBookId } = this.state;
    const { isLoading } = this.props;
    return (
      <>
        {isLoading ? (
          <Loader
            className={styles.loader}
            type="Oval"
            color="#ff6b09"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <>
            <div>
              <div className={styles.wrapper}>
                <AddBookForm />
                {books.length === 0 && <EmptyList />}
                {readBooks.length > 0 && (
                  <div className={styles.marginBottom}>
                    <LibraryTitle
                      title={'Прочитано'}
                      isReadBooks={true}
                      isPlannedBooks={false}
                      books={readBooks}
                    />
                    <LibraryList
                      canBeDeleted={true}
                      isReadBooks={true}
                      books={readBooks}
                      onClickResume={this.handleClickResume}
                      onRemoveBookFromList={deleteBookAction}
                    />
                  </div>
                )}

                {readingBooks.length > 0 && (
                  <div className={styles.marginBottom}>
                    <LibraryTitle
                      title={'Читаю'}
                      isReadBooks={false}
                      isPlannedBooks={false}
                      books={readingBooks}
                    />
                    <LibraryList
                      canBeDeleted={false}
                      books={readingBooks}
                      onRemoveBookFromList={deleteBookAction}
                    />
                  </div>
                )}

                {plannedBooks.length > 0 && (
                  <>
                    <div className={styles.marginBottom}>
                      <LibraryTitle
                        title={'Маю намір прочитати'}
                        isReadBooks={false}
                        books={plannedBooks}
                      />
                      <LibraryList
                        canBeDeleted={true}
                        books={plannedBooks}
                        onClickResume={this.handleClickResume}
                        onRemoveBookFromList={deleteBookAction}
                      />
                    </div>
                    <Link to="/training" className={styles.button}>
                      Перейти до тренування
                    </Link>
                  </>
                )}
              </div>
            </div>

            {isBookReviewModalOpen && (
              <LibraryListModal bookId={choosenBookId} />
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  books: getAllBooksInLibrary(state),
  readBooks: getReadedBooks(state),
  readingBooks: getReadingBooks(state),
  plannedBooks: getPlannedBooks(state),
  isBookReviewModalOpen: state.modals.isShowBookReviewModal,
});

const mapDispathToProps = dispatch => ({
  getAllBooks: () => dispatch(getBooksAction()),
  toggleBookReviewModal: () => dispatch(toggleShowBookReviewModalAction()),
  deleteBookAction: id => dispatch(deleteBookAction(id)),
});

export default connect(mapStateToProps, mapDispathToProps)(LibraryPage);
