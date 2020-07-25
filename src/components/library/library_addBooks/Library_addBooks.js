import React, { Component } from 'react';
import products from './data.json';
import LibraryList from './LibraryList';
import Library_addBooks from './Library_addBooks_wrapper';

class Library_addBook extends Component {
  render() {
    return (
      <Library_addBooks>
        <LibraryList items={products} />
      </Library_addBooks>
    );
  }
}

export default Library_addBook;
/* const library_addBooks = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrap}>
      <h3 className={styles.title}>Маю намір прочитати</h3>
      <div className={styles.inner}>
        <p className={styles.title_name}>назва книги</p>
        <p className={styles.title_avtor}>автор</p>
        <p className={styles.title_year}>рік</p>
        <p className={styles.title_page}>стор.</p>
      </div>
    </div>
    <section>{children}</section>
    <a className={styles.button} href="https://www.w3docs.com/">
      далі
    </a>
  </div>
);
export default library_addBooks;
 */
