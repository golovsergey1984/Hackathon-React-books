import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session/sessionReducer';
import trainingReducer from './training/trainingReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loaderReducer } from './loader/loaderReducer';
import { booksReducer } from './books/booksReducer';
import { errorReducer } from './error/errorReducer';
import { modalReducer } from './modal/modalReducer';
import thunk from 'redux-thunk';

//Персистим только токен
const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    session: persistReducer(persistConfig, sessionReducer),
    books: booksReducer,
    training: trainingReducer,
    isLoading: loaderReducer,
    error: errorReducer,
    //modals: modalReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
