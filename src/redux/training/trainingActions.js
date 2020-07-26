import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const Type = {
  GET_TRAINING: 'training/GET_TRAINING',
  ADD_TRAINING: 'training/ADD_TRAINING',
  CLOSE_TRAINING: 'training/CLOSE_TRAINING',
  UPDATE_TRAINING: 'training/UPDATE_TRAINING',
  DELETE_TRAINING: 'training/DELETE_TRAINING',
  TOGGLE_IS_BOOK_READ: 'training/TOGGLE_IS_BOOK_READ',
  ADD_RESULT: 'training/ADD_RESULT',
  DELETE_RESULT: 'training/DELETE_RESULT',
};

export const getTrainingAction = createAsyncThunk(
  Type.GET_TRAINING,
  async () => {
    const response = await api.getTraining();
    return response.data;
  },
);

export const addTrainingAction = createAsyncThunk(
  Type.SEND_TRAINING,
  async trainingData => {
    const response = await api.addTraining(trainingData);
    return response.data;
  },
);

export const toggleIsBookReadAction = createAsyncThunk(
  Type.TOGGLE_IS_BOOK_READ,
  async ({ trainingId, trainingBookId, data }) => {
    const response = await api.toggleIsBookRead(
      trainingId,
      trainingBookId,
      data,
    );
    return response.data;
  },
);

export const updateTrainingAction = createAsyncThunk(
  Type.UPDATE_TRAINING,
  async ({ id, trainingData }) => {
    const response = await api.updateTraining(id, trainingData);
    return response.data;
  },
);

export const deleteTrainingAction = createAsyncThunk(
  Type.DELETE_TRAINING,
  async id => {
    const response = await api.deleteTraining(id);
    return response.data;
  },
);

export const addResultAction = createAsyncThunk(
  Type.ADD_RESULT,
  async ({ trainingId, data }) => {
    const response = await api.addResult(trainingId, data);
    return response.data;
  },
);

export const deleteResultAction = createAsyncThunk(
  Type.DELETE_RESULT,
  async ({ trainingId, data }) => {
    const response = await api.deleteResult(trainingId, data);
    return response.data;
  },
);
