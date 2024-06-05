import React from "react";

/* Manejo básico del Estado en funciones utilizando 
React Hooks, useState de forma individual y declarativa. 
Utilización de Efectos para manejar el ciclo de vida */

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  console.log(value);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (loading) {
      setTimeout(() => {
        console.log("Haciendo validación");

        if (value !== SECURITY_CODE) {
          setError(true);
        } else {
          setError(false);
        }

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

      {error && !loading && <p>Error: el código es incorrecto.</p>}
      {loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          // setError(false); // funciona
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // setError(false); // funciona
          setLoading(true);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
