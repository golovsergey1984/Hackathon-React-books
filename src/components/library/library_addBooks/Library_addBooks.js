import React, { Component } from 'react';
import LibraryList from './LibraryList';
import LibraryAddBooks from './Library_addBooks_wrapper';

class Library_addBook extends Component {
  render() {
    return (
      <LibraryAddBooks>
        <LibraryList />
      </LibraryAddBooks>
    );
  }
}

export default Library_addBook;
