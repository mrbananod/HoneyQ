// =====================
// Mostrar / ocultar panel de autenticación
// =====================
const showAuthBtn = document.getElementById("showAuthPanel");
const closeAuthBtn = document.getElementById("closeAuthPanel");
const authPanel = document.getElementById("authPanel");

showAuthBtn.addEventListener("click", () => {
  authPanel.style.display = "block";
});

closeAuthBtn.addEventListener("click", () => {
  authPanel.style.display = "none";
});

// =====================
// Registro de usuario en localStorage
// =====================
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (email && password) {
    // Guardar usuario en localStorage
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    document.getElementById("registerMessage").textContent = "Usuario registrado con éxito";
    registerForm.reset();
  } else {
    document.getElementById("registerMessage").textContent = "Por favor completa todos los campos";
  }
});

// =====================
// Inicio de sesión en localStorage
// =====================
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.email === email && savedUser.password === password) {
    document.getElementById("loginMessage").textContent = "Inicio de sesión exitoso. Bienvenido!";
    loginForm.reset();
    authPanel.style.display = "none";
  } else {
    document.getElementById("loginMessage").textContent = "Usuario o contraseña incorrectos";
  }
});
