import React from "react";
import Header from "../components/library/library_all_categories/Header";
import AddBook from "../components/library/library_all_categories/AddBook";
import BooksList from "../components/library/library_all_categories/BooksList";

const Library = () => (
  <div>
    <Header />
    <AddBook />
    <BooksList
      isRead={[
        {
          id: 2,
          name: "GoodBook",
          author: "GoodAuthor",
          year: 234,
          pages: 23,
          stars: 5,
        },
      ]}
      isReading={[
        {
          id: 4,
          name: "GoodBook",
          author: "GoodAuthor",
          year: 234,
          pages: 23,
        },
      ]}
      willRead={[
        {
          id: 2,
          name: "GoodBook",
          author: "GoodAuthor",
          year: 234,
          pages: 23,
        },
      ]}
    />
  </div>
);

export default Library;
