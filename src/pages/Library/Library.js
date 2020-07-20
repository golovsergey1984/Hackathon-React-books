import React from "react";
import LibraryList from "../../components/library/BookList/LibraryList";
import LibraryTitle from "../../components/library/BookList/LibraryTitle";
import styles from "../../components/library/BookList/library.module.css";

const Library = () => (
  <div className={styles.wrapper}>
    <div className={styles.booksMarginBottom}>
      <LibraryTitle title={"Прочитано"} isReadBooks={true} />
      <LibraryList
        isReadBooks={true}
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
    <div className={styles.booksMarginBottom}>
      <LibraryTitle title={"Читаю"} isReadBooks={false} />
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
    <div className={styles.booksMarginBottom}>
      <LibraryTitle title={"Маю намір прочитати"} isReadBooks={false} />
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
  </div>
);

export default Library;
