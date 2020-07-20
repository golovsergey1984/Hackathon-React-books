import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const Type = {
  GET_BOOKS: 'book/GET_BOOKS',
  CREATE_BOOK: 'book/CREATE_BOOK',
  UPDATE_BOOK: 'book/UPDATE_BOOK',
  DELETE_BOOK: 'book/DELETE_BOOK',
};

export const getBooksAction = createAsyncThunk(Type.GET_BOOKS, async () => {
  const response = await api.getBooks();
  return response.data;
});

export const createBookAction = createAsyncThunk(
  Type.CREATE_BOOK,
  async book => {
    const response = await api.createBook(book);
    return response.data;
  },
);

export const updateBookAction = createAsyncThunk(
  Type.UPDATE_BOOK,
  async (bookId, bookData) => {
    const response = await api.updateBook(bookId, bookData);
    const book = response.data.book;
    book._id = bookId;
    return { book };
  },
);

export const deleteBookAction = createAsyncThunk(Type.DELETE_BOOK, async id => {
  const response = await api.deleteBook(id);
  return response.data;
});
