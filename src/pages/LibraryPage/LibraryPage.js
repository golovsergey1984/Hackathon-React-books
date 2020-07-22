import React, { Component } from 'react';
import styles from './LibraryPage.module.css';
//Components

import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryTitle from '../../components/Library/LibraryTitle/LibraryTitle';
import AddBookForm from '../../components/Library/AddBookForm/AddBookForm';
import EmptyList from '../../components/Library/EmptyList/EmptyList';
import LibraryListModal from '../../components/Library/LibraryList-modal/LibraryList-modal';
import ToReadList from '../../components/Library/library_addBooks/Library_addBooks';

export default class LibraryPage extends Component {
  state = {
    modal: false,
  };

  handleModalChange = toggle => {
    this.setState({ modal: toggle });
  };

  render() {
    const { modal } = this.state;

    const {
      books = true,
      isReadBooks = true,
      isReadingBooks = false,
      toReadBooks = false,
    } = this.props;

    return (
      <>
        <div>
          <div className={styles.wrapper}>
            <AddBookForm />
            {!books && <EmptyList />}
            {isReadBooks && (
              <div>
                <LibraryTitle title={'Прочитано'} isReadBooks={true} />
                <LibraryList
                  onModalChange={this.handleModalChange}
                  isReadBooks={true}
                  books={[
                    {
                      title: 'Some title',
                      author: 'some author',
                      year: 2345,
                      pages: 345,
                      rating: 4,
                      id: 2,
                    },
                  ]}
                />
              </div>
            )}
            {isReadingBooks && (
              <div>
                <LibraryTitle title={'Читаю'} isReadBooks={false} />
                <LibraryList
                  books={[
                    {
                      title: 'Some title',
                      author: 'some author',
                      year: 2345,
                      pages: 345,
                      id: 2,
                    },
                  ]}
                />
              </div>
            )}
            {toReadBooks && <ToReadList />}
          </div>
        </div>
        {modal && <LibraryListModal />}
      </>
    );
  }
}
