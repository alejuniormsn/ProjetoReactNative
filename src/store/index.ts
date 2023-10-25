import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    modalReducer,
    userReducer,
  },
});
