import "./App.css";
import { Testimonio } from "./componentes/Testimonio";
import { Lista } from "./componentes/Lista";
import ItemForm from "./componentes/ItemForm";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>TO DO LIST</h1>
        <Lista />
        <ItemForm />
        {/* <Lista>aaa</Lista> */}
        {/* <Componente></Componente> */}
        {/* <Testimonio
          imgNombre="Emma"
          nombre="Emma"
          cargo="Subgerente"
          texto="Hace de la filantropía una forma de vida"
        />
        <Testimonio
          imgNombre="Sarah"
          nombre="Sarah"
          cargo="Cadete"
          texto="Sabe mas que Emma"
        /> */}
      </div>
    </div>
  );
}

export default App;
