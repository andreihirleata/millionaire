import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from '../features/trivia/triviaSlice';

export default configureStore({
  reducer: {
    trivia: triviaReducer,
  },
});
