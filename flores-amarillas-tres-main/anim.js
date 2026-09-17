// Sincronizar las letras con la canción
var audio = document.querySelector("#audio");
var lyrics = document.querySelector("#lyrics");
var ultimaLetra = "";

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: " eres", time: 0, duration: 1 },
  { text: "lo que mas quiero en este mundo eso eres", time: 3 },
  { text: "mi pensamiento mas profundo tambien eres", time: 9 },
  {text: "Tan sólo dime lo que hago, aquí me tienes", time: 16},
  {text: "eres", time: 25, duration: 1 },
  {text: "Cuando despierto, lo primero, eso eres", time: 29},
  {text: "Lo que a mi vida le hace falta si no vienes", time: 35},
  {text: "la unica preciosa que en mi mente habita hoy", time: 42},
  {text: "¿Qué más puedo decirte?", time: 52, duration: 3},
  {text: "tal vez puedo mentirte sin razon", time: 54, duration: 6},
  {text: "pero lo que hoy yo siento ", time: 60, duration:3 },
  {text: "es que sin ti estoy muerto", time: 65, duration:3 },
  {text: "pues eres", time: 68, duration:4 },
  {text: "lo que mas quiero en este mundo eso eres", time: 71},
];

// Animar las letras
function updateLyrics() {
  // Lee el segundo exacto en que va la canción
  var time = audio.currentTime;

  // Busca la frase que corresponde a ese segundo
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + (line.duration || 6)
  );

  // Si hay una frase para mostrar
  if (currentLine) {

    // Solo anima cuando cambia a una frase nueva
    if (ultimaLetra !== currentLine.text) {
      ultimaLetra = currentLine.text;
      lyrics.style.opacity = "";

      // Quita la clase para poder reiniciar la animación
      lyrics.classList.remove("mostrar");

      // Escribe la frase nueva en la pantalla
      lyrics.textContent = currentLine.text;

      // Esta línea permite que el navegador reinicie la animación
      void lyrics.offsetWidth;

      // Activa la animación de style.css
      lyrics.classList.add("mostrar");
    }

  } else {
    // Si no hay frase para este segundo, se oculta
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    ultimaLetra = "";
  }
}

audio.addEventListener("timeupdate", updateLyrics);
audio.addEventListener("play", updateLyrics);

// Los navegadores pueden bloquear el sonido automático. Si ocurre, el primer
// toque o clic en la página inicia la música sin mostrar controles.
audio.play().catch(function () {
  document.addEventListener("pointerdown", function () {
    audio.play();
  }, { once: true });
});
