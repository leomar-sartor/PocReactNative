import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './features/counter/counter-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//type GetStateType = typeof store.getState;

export type RootState = ReturnType<typeof store.getState>;
