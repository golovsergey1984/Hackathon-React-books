import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowLogOutModal: false,
  isShowBookReviewModal: false,
  isShowResultModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    toggleShowLogOutModalAction: state => {
      state.isShowLogOutModal = !state.isShowLogOutModal;
    },
    toggleShowBookReviewModalAction: state => {
      state.isShowBookReviewModal = !state.isShowBookReviewModal;
    },
    toggleShowResultModalAction: state => {
      state.isShowResultModal = !state.isShowResultModal;
    },
  },
});

export const modalReducer = modalSlice.reducer;
