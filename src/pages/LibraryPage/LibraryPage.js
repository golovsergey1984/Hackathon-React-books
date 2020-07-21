import React, { Component } from 'react';
import LibraryList from '../../components/library/BookList/LibraryList';
import LibraryTitle from '../../components/library/BookList/LibraryTitle';
import AddBookForm from '../../components/library/BookList/AddBookForm';
import styles from './LibraryPage.module.css';

export default class LibraryPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <AddBookForm />
          <LibraryTitle title={'Прочитано'} isReadBooks={true} />
          <LibraryList
            isReadBooks={true}
            books={[
              {
                title: 'Some title',
                author: 'some author',
                year: 2020,
                pages: 345,
                rating: 5,
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
                year: 2020,
                pages: 345,
                rating: 5,
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
                title: 'Some title',
                author: 'some author',
                year: 2020,
                pages: 345,
                rating: 5,
                id: 2,
              },
            ]}
          />
        </div>
      </div>
    )


  }
}
