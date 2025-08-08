// Guardar personaje en localStorage
document.getElementById("personajeForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(e.target));
  localStorage.setItem("personaje", JSON.stringify(datos));
  window.location.href = "chat.html";
});

// Simular chat
document.getElementById("chatForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");
  const personaje = JSON.parse(localStorage.getItem("personaje"));
  
  chatBox.innerHTML += `<p><strong>Tú:</strong> ${input}</p>`;
  chatBox.innerHTML += `<p><strong>${personaje.nombre}:</strong> ${responderComoPersonaje(input, personaje)}</p>`;
  document.getElementById("userInput").value = "";
});

function responderComoPersonaje(mensaje, personaje) {
  return `Hmm... eso suena interesante. Como ${personaje.personalidad}, yo diría que...`;
}