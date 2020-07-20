import { createSlice } from '@reduxjs/toolkit';
import {
  getTrainingAction,
  addTrainingAction,
  toggleIsBookReadAction,
  updateTrainingAction,
  deleteTrainingAction,
  addResultAction,
  deleteResultAction,
} from './trainingActions';

const initialState = {
  trainingId: null,
  books: [],
  booksCount: 0,
  unreadCount: 0,
  readPagesCount: 0,
  avgReadPages: 0,
  isDone: false,
  pagesReadResult: [],
};

const trainingSlice = createSlice({
  name: 'training',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(deleteTrainingAction.fulfilled, () => initialState)
      .addMatcher(
        action =>
          action.type === getTrainingAction.fulfilled.type ||
          action.type === addTrainingAction.fulfilled.type ||
          action.type === toggleIsBookReadAction.fulfilled.type ||
          action.type === updateTrainingAction.fulfilled.type,
        (state, action) => action.payload.training,
      )
      .addMatcher(
        action =>
          action.type === addResultAction.fulfilled.type ||
          action.type === deleteResultAction.fulfilled.type,
        (state, action) => ({
          ...state,
          pagesReadResult: action.payload.pagesReadResult,
        }),
      )
      .addMatcher(
        action =>
          action.type === getTrainingAction.rejected.type ||
          action.type === addTrainingAction.rejected.type ||
          action.type === toggleIsBookReadAction.rejected.type ||
          action.type === updateTrainingAction.rejected.type ||
          action.type === deleteTrainingAction.rejected.type ||
          action.type === addResultAction.rejected.type ||
          action.type === deleteResultAction.rejected.type,
        (state, action) => initialState,
      ),
});

export default trainingSlice.reducer;
