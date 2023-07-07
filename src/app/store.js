import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { themeSlice } from '../features/themeSlice';
import { inputSlice } from '../features/counter/inputSlice';
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    input : inputSlice.reducer
  },
});
