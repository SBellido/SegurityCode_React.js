import React from "react";

/* Manejo básico del Estado en funciones utilizando 
React Hooks, useState de forma individual y declarativa */
function UseState({ name }) {
  const [error, setError] = React.useState(false);

  return (
    <div>
      <h2>Elminar {name}</h2>
      <p>Por favor, escribe el código de seguridad</p>

      {error && <p>Error: el código es incorrecto.</p>}

      <input placeholder="Código de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };
