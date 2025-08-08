document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    document.getElementById("registerMessage").textContent = "Completa todos los campos.";
    return;
  }

  // Guardar en localStorage (temporal)
  const user = { name, email, password };
  localStorage.setItem("user_" + email, JSON.stringify(user));

  document.getElementById("registerMessage").textContent = "¡Registro exitoso!";
  document.getElementById("registerForm").reset();
});
