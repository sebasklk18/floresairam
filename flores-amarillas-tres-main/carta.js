const abrirCarta = document.querySelector("#abrir-carta");
const cartaAbierta = document.querySelector("#carta-abierta");
const cerrarCarta = document.querySelector("#cerrar-carta");
const corazonesCarta = document.querySelector(".corazones-carta");

function mostrarCorazones() {
  corazonesCarta.replaceChildren();

  for (let indice = 0; indice < 34; indice += 1) {
    const corazon = document.createElement("span");
    corazon.className = "corazon-carta";
    corazon.textContent = "♥";
    corazon.style.setProperty("--posicion", `${Math.random() * 96 + 2}%`);
    corazon.style.setProperty("--tamano", `${10 + Math.random() * 20}px`);
    corazon.style.setProperty("--desvio", `${(Math.random() - .5) * 140}px`);
    corazon.style.setProperty("--retraso", `${Math.random() * .65}s`);
    corazonesCarta.appendChild(corazon);
  }
}

abrirCarta.addEventListener("click", () => {
  cartaAbierta.showModal();
  mostrarCorazones();
});
cerrarCarta.addEventListener("click", () => cartaAbierta.close());

cartaAbierta.addEventListener("click", (event) => {
  if (event.target === cartaAbierta) cartaAbierta.close();
});
