import React, { Component, Fragment } from 'react';

//Components
import Library_addBook from "../../components/library_addBooks/Library_addBooks"
import Library_all_categories from "../../components/library/BookList/Library_all_categories"


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
