const fondoFlores = document.querySelector(".flores-fondo");
const configuracionFlores = [
  [2, 18, 5.5, -2.0], [8, 26, 7.2, -1.1], [14, 15, 5.2, -3.4],
  [20, 31, 8.4, -2.6], [27, 22, 6.4, -4.1], [34, 35, 9.5, -1.6],
  [41, 19, 5.9, -3.1], [48, 29, 8.0, -2.3], [55, 16, 5.4, -4.4],
  [62, 34, 9.2, -1.3], [69, 23, 6.8, -3.8], [76, 30, 8.3, -2.1],
  [83, 17, 5.6, -4.0], [90, 28, 7.9, -1.8], [97, 21, 6.3, -3.0]
];

configuracionFlores.forEach(([izquierda, alto, tamano, retraso]) => {
  const flor = document.createElement("span");
  flor.className = "mini-girasol";
  flor.style.setProperty("--izquierda", `${izquierda}%`);
  flor.style.setProperty("--alto", `${alto}vmin`);
  flor.style.setProperty("--tamano", `${tamano}vmin`);
  flor.style.setProperty("--retraso", `${retraso}s`);
  const petalos = Array.from({ length: 7 }, (_, indice) =>
    `<span class="petalo-rosa" style="--angulo:${indice * (360 / 7)}deg"></span>`
  ).join("");
  flor.innerHTML = `<span class="mini-girasol__tallo"></span><span class="mini-girasol__cabeza">${petalos}</span>`;
  fondoFlores.appendChild(flor);
});
