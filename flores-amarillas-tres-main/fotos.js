const fotosTarjeta = document.querySelectorAll(".foto-tarjeta");

function mostrarFlores(foto) {
  foto.querySelectorAll(".flor-foto").forEach((flor) => flor.remove());
  const flores = ["🌼", "🌸", "🌻", "✿"];

  for (let indice = 0; indice < 18; indice += 1) {
    const flor = document.createElement("span");
    flor.className = "flor-foto";
    flor.textContent = flores[indice % flores.length];
    flor.style.setProperty("--posicion", `${Math.random() * 90 + 5}%`);
    flor.style.setProperty("--tamano", `${12 + Math.random() * 16}px`);
    flor.style.setProperty("--desvio", `${(Math.random() - .5) * 100}px`);
    flor.style.setProperty("--retraso", `${Math.random() * .45}s`);
    foto.appendChild(flor);
  }
}

fotosTarjeta.forEach((foto) => {
  foto.addEventListener("click", () => {
    const estaVolteada = foto.classList.toggle("esta-volteada");
    foto.setAttribute("aria-pressed", String(estaVolteada));
    if (estaVolteada) mostrarFlores(foto);
  });
});
