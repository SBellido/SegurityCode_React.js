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
  });

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  console.log(state.value);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    console.log(state);

    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo validación");

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }

        setLoading(false);

        console.log("Terminando validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  return (
    <div>
      <h2>Elminar {name}</h2>
      <p>Por favor, escribe el código de seguridad</p>

      {state.error && !state.loading && <p>Error: el código es incorrecto.</p>}
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
}

export { UseState };
