import React from "react";
import "./analocio.css";
import { useState, useEffect } from "react";
import dividirCircunferencia from "./DividirEnDoce";
import dividirEnSesenta from "./DividirEnSesenta";

function ComponenteAnalogico() {
  const [hora, setHora] = useState<number>(0);
  const [minuto, setMinuto] = useState<number>(0);
  const [segundo, setSegundo] = useState<number>(0);
  const obt = (): { x: number; y: number } => {
    const centroX = 12;
    const centroY = 12;
    return { x: centroX, y: centroY };
  };
  let centro = obt();
  useEffect(() => {
    const actualizarHora = () => {
      const fechaActual = new Date();
      setSegundo(fechaActual.getSeconds());
      setMinuto(fechaActual.getMinutes());
      setHora(fechaActual.getHours());
    };
    // para el segundero
    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);
  let puntosHoras = dividirCircunferencia(3, centro.x, centro.y);
  let puntosMim = dividirEnSesenta(5, centro.x, centro.y);
  let puntosNumHoras = dividirCircunferencia(5, centro.x, centro.y);
  console.log(minuto);
  return (
    <div className="">
      <section className="">
        <p className="">Reloj online</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {puntosNumHoras.map((obj, index: number) => {
            if (index != 0) {
              return (
                <text x={obj.x} y={obj.y} fontSize="1px">
                  {index}
                </text>
              );
            }
          })}
          ;
          <circle cx={centro.x + 0.3} cy={centro.y - 0.3} r="5.8" />
          <circle cx={centro.x + 0.5} cy={centro.y - 0.5} r="0.1" />
          <line
            x1={centro.x + 0.5}
            y1={centro.y - 0.5}
            x2={puntosHoras[hora].x}
            y2={puntosHoras[hora].y}
            style={{ strokeWidth: "0.4" }}
          />
          {minuto > 0 ? (
            <line
              x1={centro.x + 0.5}
              y1={centro.y - 0.5}
              x2={puntosMim[minuto - 1].x}
              y2={puntosMim[minuto - 1].y}
              style={{ strokeWidth: "0.2" }}
            />
          ) : (
            <line
              x1={centro.x + 0.5}
              y1={centro.y - 0.5}
              x2={puntosMim[minuto].x}
              y2={puntosMim[minuto].y}
              style={{ strokeWidth: "0.2" }}
            />
          )}
          <line
            x1={centro.x + 0.5}
            y1={centro.y - 0.5}
            x2={puntosMim[segundo].x}
            y2={puntosMim[segundo].y}
            style={{ color: "red" }}
          />
          {/*  {puntosMim.map((obj, index: number) => {
            return (
              <text x={obj.x} y={obj.y} fontSize="0.3px">
                {index + 1}
              </text>
            );
          })} */}
        </svg>
        {minuto + "/" + segundo}
        <a href="/RelojDigitalAnalogico">inicio</a>
      </section>
    </div>
  );
}

export default ComponenteAnalogico;
