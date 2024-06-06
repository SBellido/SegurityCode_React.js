import React from "react";

/* Manejo básico del Estado en funciones utilizando 
React Hooks, useState de forma semi-declarativa. 
Utilización de Efectos para manejar el ciclo de vida */

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });

  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.write, payload: value });
  };

  React.useEffect(() => {
    console.log("Empezando el efecto");
    console.log("Estado: ", state);

    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Elminar {name}</h2>
        <p>Por favor, escribe el código de seguridad</p>

        {state.error && !state.loading && (
          <p>Error: el código es incorrecto.</p>
        )}

        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          // onChange={(event) => {
          //   onWrite(event.target.value);
          // }}
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Con seguridad quieres eliminarlo?</p>
        <button onClick={onDelete}>Sí, eliminar</button>
        <button onClick={onReset}>No, dejarlo como está</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito.</p>

        <button onClick={onReset}>Resetear, volver atrás</button>
      </React.Fragment>
    );
  }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  write: "WRITE",
  check: "CHECK",
  delete: "DELETE",
  reset: "RESET",
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
});

/* Valida si existe el action.type, si es así lo retorna */
const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
