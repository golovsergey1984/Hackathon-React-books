import {
  getBooksAction,
  createBookAction,
  updateBookAction,
  deleteBookAction,
} from './booksActions';
import { createReducer } from '@reduxjs/toolkit';

export const booksReducer = createReducer([], builder =>
  builder
    .addCase(getBooksAction.fulfilled, (state, action) => action.payload.books)
    .addCase(createBookAction.fulfilled, (state, action) => [
      ...state,
      action.payload.book,
    ])
    .addCase(updateBookAction.fulfilled, (state, action) => {
      const updatedBook = action.payload.book;
      const filtered = state.filter(book => book._id !== updatedBook._id);
      return [...filtered, updatedBook];
    })
    .addCase(deleteBookAction.fulfilled, (state, action) =>
      state.filter(book => book._id !== action.payload.books._id),
    )
    .addMatcher(
      action =>
        action.type === getBooksAction.rejected.type ||
        action.type === createBookAction.rejected.type ||
        action.type === updateBookAction.rejected.type ||
        action.type === deleteBookAction.rejected.type,
      (state, action) => {
        return [];
      },
    ),
);
