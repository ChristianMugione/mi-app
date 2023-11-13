import React from "react";
import "../hojas-de-estilos/Testimonio.css";

export function Testimonio({ imgNombre, nombre, cargo, texto }) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${imgNombre}.png`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{nombre}</p>
        <p className="cargo-testimonio">{cargo}</p>
        <p className="texto-testimonio">{texto}</p>
      </div>
    </div>
  );
}
