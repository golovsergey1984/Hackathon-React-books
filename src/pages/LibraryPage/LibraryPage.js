import React, { Component, Fragment } from 'react';
import styles from './LibraryPage.module.css';
//Components

import LibraryList from '../../components/Library/LibraryList/LibraryList';
import LibraryTitle from '../../components/Library/LibraryTitle/LibraryTitle';
import AddBookForm from '../../components/Library/AddBookForm/AddBookForm';
import EmptyList from '../../components/Library/EmptyList/EmptyList';
import LibraryListModal from '../../components/Library/LibraryList-modal/LibraryList-modal';

export default class LibraryPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <div>
            <AddBookForm />
            <EmptyList />
            <LibraryTitle title={'Прочитано'} isReadBooks={true} />
            <LibraryList
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
          <div>
            <LibraryTitle title={'Маю намір прочитати'} isReadBooks={false} />
            <LibraryList
              books={[
                {
                  title: 'Some title ',
                  author: 'some author',
                  year: 2345,
                  pages: 345,
                  id: 2,
                },
              ]}
            />
          </div>
        </div>
        <LibraryListModal />
      </div>
    );
  }
}
