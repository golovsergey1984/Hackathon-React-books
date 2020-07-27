import React, { Component } from 'react';
import LibraryList from './LibraryList';
import Library_addBooks from './Library_addBooks_wrapper';

class Library_addBook extends Component {
  render() {
    return (
      <Library_addBooks>
        <LibraryList />
      </Library_addBooks>
    );
  }
}

export default Library_addBook;
