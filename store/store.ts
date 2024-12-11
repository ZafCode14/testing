import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;