import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as api from '../../services/api';
import { getToken } from './sessionSelectors';

export const Type = {
  LOG_IN: 'session/LOG_IN',
  REGISTRATION: 'session/REGISTRATION',
  LOG_OUT: 'session/LOG_OUT',
  GET_USER: 'session/GET_USER',
};

export const loginAction = createAsyncThunk(Type.LOG_IN, async credentials => {
  try {
    // console.log(credentials);
    const res = await api.logIn(credentials);
    return res.data;
  } catch (error) {
    // console.log(credentials);
    console.log(error);
  }
});

export const registrationAction = createAsyncThunk(
  Type.REGISTRATION,
  async credentials => {
    const response = await api.register(credentials);
    return response.data;
  },
);

export const getUserAction = createAsyncThunk(
  Type.GET_USER,
  async (args, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) throw new Error('Token not found');
    api.setAuthHeader(token);
    const response = await api.getUser();
    return response.data;
  },
);

export const logOutAction = createAction(Type.LOG_OUT);
