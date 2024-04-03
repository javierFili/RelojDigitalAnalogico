interface Punto {
  x: number;
  y: number;
}
const dividirCircunferencia = (r: number, x: number, y: number): Punto[] => {
  let puntos: Punto[] = [];
  const radio = r; // Radio de la circunferencia
  const centroX = x; // Coordenada x del centro de la circunferencia
  const centroY = y; // Coordenada y del centro de la circunferencia
  for (let i = 0; i < 12; i++) {
    const angulo = (Math.PI / 6) * i; // Ángulo en radianes (360° / 12 puntos = 30°)

    // Calcular las coordenadas (x, y) del punto utilizando seno y coseno
    const x = centroX + radio * Math.cos(angulo);
    const y = centroY + radio * Math.sin(angulo);

    puntos.push({ x, y });
  }
  puntos = rotarPuntos(puntos);
  return puntos;
};

function rotarPuntos(puntos: Punto[]) {
  let puntosNuevo: Punto[] = [];
  puntosNuevo[0] = puntos[10];
  puntosNuevo[1] = puntos[10];
  puntosNuevo[2] = puntos[11];
  puntosNuevo[3] = puntos[0];
  puntosNuevo[4] = puntos[1];
  puntosNuevo[5] = puntos[2];
  puntosNuevo[6] = puntos[3];
  puntosNuevo[7] = puntos[4];
  puntosNuevo[8] = puntos[5];
  puntosNuevo[9] = puntos[6];
  puntosNuevo[10] = puntos[7];
  puntosNuevo[11] = puntos[8];
  puntosNuevo[12] = puntos[9];
  return puntosNuevo;
}

export default dividirCircunferencia;
