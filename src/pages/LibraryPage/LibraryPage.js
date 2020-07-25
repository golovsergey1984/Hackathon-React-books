import React, { Component } from 'react';
import styles from './LibraryPage.module.css';
import {
  getReadedBooks,
  getReadingBooks,
  getAllBooksInLibrary,
  getPlannedBooks,
} from '../../redux/books/booksSelectors';
import { getBooksAction } from '../../redux/books/booksActions';
//Components
import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryTitle from '../../components/Library/LibraryTitle/LibraryTitle';
import AddBookForm from '../../components/Library/AddBookForm/AddBookForm';
import EmptyList from '../../components/Library/EmptyList/EmptyList';
import LibraryListModal from '../../components/Library/LibraryList-modal/LibraryList-modal';
import ToReadList from '../../components/Library/library_addBooks/Library_addBooks';
import { connect } from 'react-redux';

class LibraryPage extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    this.props.getAllBooks();
  }

  handleModalChange = toggle => {
    this.setState({ modal: toggle });
  };

  render() {
    const { modal } = this.state;

    const { books, readBooks, readingBooks, plannedBooks } = this.props;

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
                  onModalChange={this.handleModalChange}
                  isReadBooks={true}
                  books={readBooks}
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

        {modal && <LibraryListModal />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: getAllBooksInLibrary(state),
  readBooks: getReadedBooks(state),
  readingBooks: getReadingBooks(state),
  plannedBooks: getPlannedBooks(state),
});

const mapDispathToProps = dispatch => ({
  getAllBooks: () => dispatch(getBooksAction()),
});

export default connect(mapStateToProps, mapDispathToProps)(LibraryPage);
