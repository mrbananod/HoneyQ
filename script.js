// Abrir/cerrar sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});

// Verificación de sesión
window.addEventListener("load", () => {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "index.html";
  }
});
