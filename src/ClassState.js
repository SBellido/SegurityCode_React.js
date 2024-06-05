import React from "react";

/* Manejo básico del Estado en Clases utilizando 
React Hooks, useState de forma individual y declarativa */
class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Elminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {this.state.error && <p>Error: el código es incorrecto.</p>}

        <input placeholder="Código de seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ error: !prevState.error }))
          }
        >
          Comprobar
        </button>
        {/* <button onClick={() => this.setState({ error: !this.state.error })}>
          Comprobar
        </button> */}
      </div>
    );
  }
}

export { ClassState };
