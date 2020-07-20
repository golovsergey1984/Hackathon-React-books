import React from 'react';
import LibraryList from '../../components/library/BookList/LibraryList';
import LibraryTitle from '../../components/library/BookList/LibraryTitle';
import AddBookForm from '../../components/library/BookList/AddBookForm';

const Library = () => (
  <div>
    <div>
      <AddBookForm />
      <LibraryTitle title={'Прочитано'} isReadBooks={true} />
      <LibraryList
        isReadBooks={true}
        books={[
          {
            title: 'Some title',
            author: 'some author',
            year: 2345,
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
            year: 2345,
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
            year: 2345,
            pages: 345,
            rating: 5,
            id: 2,
          },
        ]}
      />
    </div>
  </div>
);

export default Library;
