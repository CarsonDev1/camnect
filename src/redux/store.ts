// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

// Create a function to get the store for client-side rendering only
export const createStore = () => {
  return configureStore({
    reducer: {
      login: loginReducer,
    },
  });
};

// Create the store only when in a browser environment
let storeInstance: ReturnType<typeof createStore> | undefined;

export const getStore = () => {
  if (typeof window === 'undefined') {
    // Server-side - create a new store for each request
    return createStore();
  }

  // Client-side - create the store once and reuse it
  if (!storeInstance) {
    storeInstance = createStore();
  }

  return storeInstance;
};

// Export for type inference
export const store = getStore();

// Typed versions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;