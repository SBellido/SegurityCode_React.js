import logo from "./logo.svg";
import { ClassState } from "./ClassState.js";
import { UseState } from "./UseState.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
    </div>
  );
}

export default App;
