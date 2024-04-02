interface Punto {
  x: number;
  y: number;
}
function dividirEnSesenta(r: number, x: number, y: number) {
  let puntos: Punto[] = [];
  const radio = r; // Radio de la circunferencia
  const centroX = x; // Coordenada x del centro de la circunferencia
  const centroY = y; // Coordenada y del centro de la circunferencia
  for (let i = 0; i < 60; i++) {
    const angulo = (Math.PI / 30) * i; // Ángulo en radianes (360° / 12 puntos = 30°)

    // Calcular las coordenadas (x, y) del punto utilizando seno y coseno
    const x = centroX + radio * Math.cos(angulo);
    const y = centroY + radio * Math.sin(angulo);

    puntos.push({ x, y });
  }
  puntos = rotarPuntos(puntos);
  return puntos;
}

function rotarPuntos(puntos: Punto[]) {
  let puntosNuevo: Punto[] = [];
  let j = 0;
  for (let i = 46; i < 60; i++) {
    puntosNuevo[j] = puntos[i];
    j++;
  }
  for (let i = 0; i < 46; i++) {
    puntosNuevo[j] = puntos[i];
    j++;
  }
  return puntosNuevo;
}
export default dividirEnSesenta;
