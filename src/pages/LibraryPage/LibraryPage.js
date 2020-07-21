import React, { Component, Fragment } from 'react';

//Components
import Library_addBook from "../../components/library_addBooks/Library_addBooks"
import Library_all_categories from "../../components/library/BookList/Library_all_categories"

import LibraryList from '../../components/library/BookList/LibraryList';
import LibraryTitle from '../../components/library/BookList/LibraryTitle';
import AddBookForm from '../../components/library/BookList/AddBookForm';
import styles from './LibraryPage.module.css';

export default class LibraryPage extends Component {
  render() {
    return (
      <Fragment>
        <Library_addBook />
        <Library_all_categories />
      </Fragment>
    )


  }
}
