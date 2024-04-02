import React from "react";
import "./digital.css";
import { useState, useEffect } from "react";

function ComponenteDigital() {
  const [hora, setHora] = useState<string>("");
  const [fecha, setFecha] = useState<String>("");
  const mesesAnios = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  useEffect(() => {
    const actualizarHora = () => {
      const fechaActual = new Date();
      const horaActual = fechaActual.toLocaleTimeString();
      const fechaDia = fechaActual.getDay();
      const fechaMes = fechaActual.getMonth();
      const fechaAnio = fechaActual.getFullYear();
      setFecha(
        diasSemana[fechaDia] +
          ", " +
          fechaDia +
          " de " +
          mesesAnios[fechaMes] +
          " de " +
          fechaAnio
      );
      setHora(horaActual);
    };

    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="elementoPrincipal">
      <section className="horaActual">
        <p className="titulohora">Reloj online</p>
        <p className="fechaActual">{fecha}</p>
        <p className="horaActualizada">{hora}</p>
        <a href="/RelojDigitalAnalogico">inicio</a>
      </section>
    </div>
  );
}

export default ComponenteDigital;
