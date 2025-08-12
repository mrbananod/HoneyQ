// ============================
// LOGIN
// ============================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      localStorage.setItem("user", username);
      window.location.href = "principal.html";
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
}

// ============================
// PROTECCIÓN DE PÁGINA PRINCIPAL
// ============================
if (window.location.pathname.includes("principal.html")) {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "index.html";
  }

  // Mostrar el nombre del usuario en la interfaz
  const userDisplay = document.getElementById("userDisplay");
  if (userDisplay) {
    userDisplay.textContent = user;
  }
}

// ============================
// CERRAR SESIÓN
// ============================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
}

// ============================
// SISTEMA DE CHAT LOCAL
// ============================
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

if (chatForm) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (!message) return;

    addMessage("Tú", message);
    messageInput.value = "";

    // Respuesta automática simulada
    setTimeout(() => {
      addMessage("Personaje IA", "¡Hola! Esta es una respuesta de ejemplo. Aquí luego irá la conexión con OpenRouter.");
    }, 1000);
  });
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
