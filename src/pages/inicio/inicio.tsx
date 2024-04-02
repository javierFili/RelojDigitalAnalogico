import React from "react";
import "./inicio.css";

// Definición del componente como una función nombrada
function Inicio() {
  return (
    <section className="tituloInicio">
      <p className="letraTitulo">
        <p>
          Desea ver su reloj en forma <a href="/analogico"> analogica</a> o de
          forma <a href="/digital">digital</a>{" "}
        </p>{" "}
      </p>
    </section>
  );
}

export default Inicio;
