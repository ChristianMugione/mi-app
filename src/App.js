import "./App.css";
import { Lista } from "./componentes/Lista";
import ItemForm from "./componentes/ItemForm";
import items from "./componentes/Lista"

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>TO DO LIST</h1>
        <Lista />
        <ItemForm onSubmit={addTask} />
      </div>
    </div>
  );
}

export default App;
