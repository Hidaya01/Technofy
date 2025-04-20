// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import answerReducer from './answer/answerSlice';

export const store = configureStore({
  reducer: {
    answer: answerReducer,
  },
});
