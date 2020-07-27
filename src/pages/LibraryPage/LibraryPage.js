import React, { Component } from 'react';
import styles from './LibraryPage.module.css';
import {
  getReadedBooks,
  getReadingBooks,
  getAllBooksInLibrary,
  getPlannedBooks,
} from '../../redux/books/booksSelectors';
import { getBooksAction } from '../../redux/books/booksActions';
import { toggleShowBookReviewModalAction } from '../../redux/modal/modalActions';
//Components
import LibraryList from '../../components/library/LibraryList/LibraryList';
import LibraryTitle from '../../components/library/LibraryTitle/LibraryTitle';
import AddBookForm from '../../components/library/AddBookForm/AddBookForm';
import EmptyList from '../../components/library/EmptyList/EmptyList';
import LibraryListModal from '../../components/library/LibraryList-modal/LibraryList-modal';
import ToReadList from '../../components/library/library_addBooks/Library_addBooks';
import { connect } from 'react-redux';

class LibraryPage extends Component {
  state = {
    choosenBookId: null,
  };

  componentDidMount() {
    this.props.getAllBooks();
  }


  componentDidUpdate(prevProps) {
    if (prevProps.books.length !== this.props.books.length) {
      this.props.getAllBooks();
    }
  }

  handleModalChange = toggle => {
    this.setState({ modal: toggle });
  };

  getBookId = id => {
    console.log(id);
    this.setIdToModal(id);
  };

  setIdToModal = id => {
    console.log(id);
  };

  render() {
    const {
      books,
      readBooks,
      readingBooks,
      plannedBooks,
      isBookReviewModalOpen,
    } = this.props;
    // const readBooks = [
    //   {
    //     id: 1,
    //     title: 'test',
    //     author: 'test',
    //     year: 2000,
    //     pagesCount: 200,
    //     raiting: 4,
    //   },
    //   {
    //     id: 2,
    //     title: 'test1',
    //     author: 'test1',
    //     year: 2000,
    //     pagesCount: 200,
    //     raiting: 4,
    //   },
    // ];

    const { choosenBookId } = this.state;
    // console.log(choosenBookId);
    return (
      <>
        <div>
          <div className={styles.wrapper}>
            <AddBookForm />

            {books.length === 0 && <EmptyList />}

            {readBooks.length > 0 && (
              <div className={styles.marginBottom}>
                <LibraryTitle title={'Прочитано'} isReadBooks={true} />
                <LibraryList
                  isReadBooks={true}
                  books={readBooks}
                  onClickResume={this.handleClickResume}
                />
              </div>
            )}

            {readingBooks.length > 0 && (
              <div className={styles.marginBottom}>
                <LibraryTitle title={'Читаю'} isReadBooks={false} />
                <LibraryList books={readingBooks} />
              </div>
            )}

            {plannedBooks.length > 0 && <ToReadList />}
          </div>
        </div>

        {isBookReviewModalOpen && <LibraryListModal bookId={choosenBookId} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: getAllBooksInLibrary(state),
  readBooks: getReadedBooks(state),
  readingBooks: getReadingBooks(state),
  plannedBooks: getPlannedBooks(state),
  isBookReviewModalOpen: state.modals.isShowBookReviewModal,
});

const mapDispathToProps = dispatch => ({
  getAllBooks: () => dispatch(getBooksAction()),
  toggleBookReviewModal: () => dispatch(toggleShowBookReviewModalAction()),
});

export default connect(mapStateToProps, mapDispathToProps)(LibraryPage);
