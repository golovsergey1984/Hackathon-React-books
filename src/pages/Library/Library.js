import React from "react";
import LibraryList from "../../components/library/BookList/LibraryList";
import LibraryTitle from "../../components/library/BookList/LibraryTitle";
import styles from "../../components/library/BookList/library.module.css";

const Library = () => (
  <div className={styles.wrapper}>
    <LibraryTitle isReadBooks={false} />
    <LibraryList
      books={[
        {
          title: "Some title",
          author: "some author",
          year: 2345,
          pages: 345,
          rating: 5,
          id: 2,
        },
      ]}
    />
  </div>
);

export default Library;
