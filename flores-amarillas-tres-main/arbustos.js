const arbustosCelestes = document.querySelector(".arbustos-celestes");
const ubicacionesArbustos = [
  [1, .72, -1.5], [7, .9, -3.1], [13, .62, -2.3], [19, .82, -4.2],
  [26, .67, -1.1], [33, .94, -3.6], [40, .7, -2.6], [47, .86, -4.5],
  [54, .66, -1.8], [61, .96, -3.3], [68, .74, -2.1], [75, .88, -4.1],
  [82, .64, -1.3], [89, .92, -3.8], [96, .7, -2.5]
];
const angulosHojas = [-68, -52, -36, -20, -8, 8, 20, 36, 52, 68];

ubicacionesArbustos.forEach(([izquierda, escala, retraso]) => {
  const arbusto = document.createElement("span");
  arbusto.className = "arbusto-celeste";
  arbusto.style.setProperty("--izquierda", `${izquierda}%`);
  arbusto.style.setProperty("--escala", escala);
  arbusto.style.setProperty("--retraso", `${retraso}s`);
  arbusto.innerHTML = angulosHojas.map((angulo, indice) =>
    `<span class="arbusto-celeste__hoja" style="--angulo:${angulo}deg;--alto:${7 + (indice % 4) * 2}vmin"></span>`
  ).join("");
  arbustosCelestes.appendChild(arbusto);
});
