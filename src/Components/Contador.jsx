import React, { useReducer } from "react";

const initialState = { contador: 0 };

const init = (initialState) => {
  return { contador: initialState.contador + 100 };
};

const types = {
  increment: "increment",
  increment_5: "increment_5",
  decrement: "decrement",
  decrement_5: "decrement_5",
  reset: "reset",
};

function reducer(state, action) {
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
      return { contador: initialState.contador };

    default:
      return state;
  }
}

export const Contador = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: types.increment });

  const sumar5 = () => dispatch({ type: types.increment_5, payload: 5 });

  const restar = () => dispatch({ type: types.decrement });

  const restar5 = () => dispatch({ type: types.decrement_5, payload: 5 });

  const reset = () => dispatch({ type: types.reset });

  return (
    <div>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}> -</button>
        <button onClick={restar5}> -5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};
