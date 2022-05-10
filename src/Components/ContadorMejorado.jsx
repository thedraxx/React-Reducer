import React, { useReducer } from "react";
import { types } from "../actions/contadorActions";
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducer";

export const ContadorMejorado = () => {

  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

  const sumar = () => dispatch({ type: types.increment });

  const sumar5 = () => dispatch({ type: types.increment_5, payload: 5 });

  const restar = () => dispatch({ type: types.decrement });

  const restar5 = () => dispatch({ type: types.decrement_5, payload: 5 });

  const reset = () => dispatch({ type: types.reset });

  return (
    <div>
      <h2>Contador Mejorado Reducer</h2>
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
