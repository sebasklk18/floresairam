const audioMusical = document.querySelector("#audio");
const ritmoMusical = document.querySelector(".ritmo-musical");
const posicionesNotas = [
  [34, 24, -28], [40, 18, -12], [47, 15, 0], [54, 18, 12], [60, 24, 28],
  [25, 39, -48], [30, 48, -32], [70, 40, 48], [75, 49, 32],
  [27, 65, -28], [34, 72, -14], [43, 77, -5], [57, 77, 5], [66, 72, 14], [73, 65, 28]
];

const simbolosMusicales = ["♪", "♫", "♬", "♩", "♫"];

const notasMusicales = posicionesNotas.map(([x, y, rotacion], indice) => {
  const nota = document.createElement("span");
  nota.className = "icono-musical";
  nota.textContent = simbolosMusicales[indice % simbolosMusicales.length];
  nota.style.setProperty("--x", `${x}%`);
  nota.style.setProperty("--y", `${y}%`);
  nota.style.setProperty("--giro", `${rotacion}deg`);
  nota.style.setProperty("--desplazamiento-x", `${(indice % 2 ? 1 : -1) * (14 + indice % 3 * 6)}px`);
  nota.style.setProperty("--desplazamiento-y", `${-18 - indice % 4 * 8}px`);
  nota.style.setProperty("--retraso", `${indice * -0.26}s`);
  nota.style.setProperty("--duracion", `${2.1 + (indice % 4) * 0.35}s`);
  nota.style.fontSize = "30px";
  ritmoMusical.appendChild(nota);
  return nota;
});

let analizador;
let datosFrecuencia;
let contextoAudio;

function conectarAnalizador() {
  if (contextoAudio) return;

  contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
  analizador = contextoAudio.createAnalyser();
  analizador.fftSize = 64;
  datosFrecuencia = new Uint8Array(analizador.frequencyBinCount);
  const fuente = contextoAudio.createMediaElementSource(audioMusical);
  fuente.connect(analizador);
  analizador.connect(contextoAudio.destination);
  contextoAudio.resume();
}

function animarRitmo() {
  let energia = 0.18;

  if (analizador && !audioMusical.paused) {
    analizador.getByteFrequencyData(datosFrecuencia);
    energia = datosFrecuencia.reduce((suma, valor) => suma + valor, 0) / (datosFrecuencia.length * 255);

    notasMusicales.forEach((nota, indice) => {
      const frecuencia = datosFrecuencia[(indice * 2) % datosFrecuencia.length] / 255;
      nota.style.fontSize = `${26 + frecuencia * 30}px`;
    });
  } else {
    const tiempo = audioMusical.currentTime || 0;
    notasMusicales.forEach((nota, indice) => {
      const pulso = (Math.sin(tiempo * 5 + indice * 1.7) + 1) / 2;
      nota.style.fontSize = `${27 + pulso * 14}px`;
    });
  }

  ritmoMusical.style.setProperty("--energia", energia.toFixed(3));
  requestAnimationFrame(animarRitmo);
}

audioMusical.addEventListener("play", () => {
  try { conectarAnalizador(); } catch (error) { /* El pulso visual continúa sin analizador. */ }
});

document.addEventListener("pointerdown", () => {
  try {
    conectarAnalizador();
    contextoAudio.resume();
  } catch (error) { /* El pulso visual continúa sin analizador. */ }
}, { once: true });

animarRitmo();
