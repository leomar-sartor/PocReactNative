import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    //Só aqui dentro pode fazer atribuição direta
    //pois por baixo dos panos ele utiliza uma biblioteca Immer
    increment: state => {
      state.value += 1;
    },
    incrementAmaunt: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, incrementAmaunt} = counterSlice.actions;

//permite exportar o projeto e permitir que a pessoa use o alias que quiser
//export default counterSlice.reducer;
//Dessa maneira obriga a utilizar o nome definido (counterReducer)
export const counterReducer = counterSlice.reducer;
