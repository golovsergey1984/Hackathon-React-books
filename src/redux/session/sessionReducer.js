import {
  logOutAction,
  loginAction,
  registrationAction,
  getUserAction,
} from './sessionActions';
import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../services/api';
import { act } from 'react-dom/test-utils';

const initialState = {
  user: {},
  isAuthenticated: false,
  token: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(logOutAction.type, () => {
        return initialState;
      })
      .addMatcher(
        action =>
          action.type === loginAction.fulfilled.type ||
          action.type === registrationAction.fulfilled.type ||
          action.type === getUserAction.fulfilled.type,
        (state, action) => {
          const { userData, token } = action.payload.user;
          console.log(action);
          state.user = userData;
          state.token = token;
          state.isAuthenticated = true;
          api.setAuthHeader(token);
        },
      )
      .addMatcher(
        action =>
          action.type === loginAction.rejected ||
          action.type === registrationAction.rejected ||
          action.type === getUserAction.rejected,
        (state, action) => initialState,
      ),
});

export default sessionSlice.reducer;
