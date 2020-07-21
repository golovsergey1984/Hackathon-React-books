import axios from 'axios';

axios.defaults.baseURL = 'https://book-read.goit.co.ua/api/v1';

export const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

export const logIn = credentials => axios.post('/auth/login', credentials);

export const register = credentials =>
  axios.post('/auth/register', credentials);

export const logOut = () => axios.post('/auth/logout');

export const getUser = () => axios.get('/user/me');

export const getBooks = () => axios.get('/books');

export const createBook = book => axios.post('/books/create', book);

export const updateBook = (id, bookData) =>
  axios.patch(`/books/${id}`, bookData);

export const deleteBook = id => axios.delete(`/books/${id}`);

export const getTraining = () => axios.get('/training');

export const addTraining = trainingData =>
  axios.post('/training', trainingData);

export const toggleIsBookRead = (trainingId, bookId, data) =>
  axios.patch(`/training/${trainingId}/book/${bookId}`, data);

export const updateTraining = (id, data) =>
  axios.patch(`/training/${id}`, data);

export const deleteTraining = id => axios.delete(`/training/${id}`);

export const addResult = (trainingId, data) =>
  axios.post(`/training/time/${trainingId}`, data);

export const deleteResult = (trainingId, data) =>
  axios.delete(`/training/time/${trainingId}`, data);
