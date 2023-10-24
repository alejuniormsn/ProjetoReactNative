import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    modalReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
