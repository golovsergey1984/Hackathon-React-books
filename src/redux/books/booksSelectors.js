export const getAllBooksInLibrary = state => state.books;

export const getReadedBooks = state =>
  state.books.filter(book => book.status === 'readed');

export const getReadingBooks = state =>
  state.books.filter(book => book.status === 'reading');

export const getPlannedBooks = state =>
  state.books.filter(book => book.status === 'planned');
