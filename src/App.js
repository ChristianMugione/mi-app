import "./App.css";
import { Lista } from "./componentes/Lista";

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

//Pendientes:
// - boton eliminar tareas completadas
// - boton eliminar todo (que aparezca cuando hay mas de una tarea)
