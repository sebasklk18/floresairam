document.querySelectorAll(".flower__leafs").forEach((flor) => {
  const corona = document.createElement("div");
  corona.className = "girasol-petalos";

  for (let indice = 0; indice < 14; indice += 1) {
    const petalo = document.createElement("span");
    petalo.className = "girasol-petalo";
    petalo.style.setProperty("--angulo", `${indice * (360 / 14)}deg`);
    corona.appendChild(petalo);
  }

  flor.appendChild(corona);
});
