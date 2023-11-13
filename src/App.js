import "./App.css";
import { Testimonio } from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios</h1>

        <Testimonio
          imgNombre="Emma"
          nombre="Emma"
          cargo="Subgerente"
          texto="No hace una mierda"
        />
        <Testimonio
          imgNombre="Sarah"
          nombre="Sarah"
          cargo="Cadete"
          texto="Sabe mas que Emma"
        />
      </div>
    </div>
  );
}

export default App;
