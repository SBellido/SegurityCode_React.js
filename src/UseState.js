import React from "react";

/* Manejo básico del Estado en funciones utilizando 
React Hooks, useState de forma individual y declarativa. 
Utilización de Efectos para manejar el ciclo de vida */

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state.value);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    console.log("Estado: ", state);

    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo validación");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }

        console.log("Terminando validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
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
          onChange={(event) => {
            setState({
              value: event.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
              error: false,
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Con seguridad quieres eliminarlo?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            });
          }}
        >
          Sí, eliminar
        </button>
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              confirmed: false,
              value: "",
            }));
          }}
        >
          No, dejarlo como está
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito.</p>

        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: "",
            });
          }}
        >
          Resetear, volver atrás
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
