import {createStore} from 'redux';

const initialState = {
  counter: {
    value: 5,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment': {
      // Não fazer como a linha abaixo - conceito de imutabilidade
      // state.counter.value = state.counter.value + 1
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };
    }
    case 'counter/incrementAmount': {
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(
  reducer,
  //pra funcionar no web com devtools
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
