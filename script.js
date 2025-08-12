// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQv_NLKcXX91FJWnJ2iAMSfaAOB9LPZsc",
  authDomain: "honeyq-26edf.firebaseapp.com",
  projectId: "honeyq-26edf",
  storageBucket: "honeyq-26edf.appspot.com",
  messagingSenderId: "582100400487",
  appId: "1:582100400487:web:bcc5d3df0570b98b9097c2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Registro
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await db.collection("users").doc(user.uid).set({ email });
      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  });
}

// Inicio de sesión
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Guardar sesión en localStorage
      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email
      }));

      // Redirigir a página principal
      window.location.href = "principal.html";
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  });
}

// Protección de página principal
if (window.location.pathname.includes("principal.html")) {
  const session = localStorage.getItem("user");
  if (!session) {
    window.location.href = "index.html";
  } else {
    const user = JSON.parse(session);
    const userDisplay = document.getElementById("userDisplay");
    if (userDisplay) userDisplay.textContent = user.email;
  }
}

// Cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut();
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
}

