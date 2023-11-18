import "./App.css";
import { Lista, addTask } from "./componentes/Lista";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>TO DO LIST</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
