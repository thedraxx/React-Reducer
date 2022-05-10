import { types } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorInit = (initialState) => {
  return { contador: initialState.contador + 100 };
};

export function contadorReducer(state, action) {
  switch (action.type) {
    case types.increment:
      return { contador: state.contador + 1 };

    case types.increment_5:
      return { contador: state.contador + action.payload };

    case types.decrement:
      return { contador: state.contador - 1 };

    case types.decrement_5:
      return { contador: state.contador - action.payload };

    case types.reset:
      return { contador: contadorInitialState.contador };

    default:
      return state;
  }
}
