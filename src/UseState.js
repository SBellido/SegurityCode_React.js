import React from "react";

/* Manejo básico del Estado en funciones utilizando 
React Hooks, useState de forma individual y declarativa. 
Utilización de Efectos para manejar el ciclo de vida */
function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (loading) {
      setTimeout(() => {
        console.log("Haciendo validación");
        setLoading(false);
        console.log("Terminando validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Elminar {name}</h2>
      <p>Por favor, escribe el código de seguridad</p>

      {error && <p>Error: el código es incorrecto.</p>}
      {loading && <p>Cargando...</p>}

      <input placeholder="Código de seguridad" />
      {/* <button onClick={() => setError(!error)}>Comprobar</button> */}
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
