<!-- Incluye Firebase SDK en tu HTML -->
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"></script>

<script>
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDQv_NLKcXX91FJWnJ2iAMSfaAOB9LPZsc",
    authDomain: "honeyq-26edf.firebaseapp.com",
    projectId: "honeyq-26edf",
    storageBucket: "honeyq-26edf.appspot.com",
    messagingSenderId: "582100400487",
    appId: "1:582100400487:web:bcc5d3df0570b98b9097c2"
  };

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Registro de usuario
  async function register(email, password, name) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Guardar nombre en Firestore
      await db.collection("users").doc(user.uid).set({ name });

      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  }

  // Inicio de sesión
  async function login(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const doc = await db.collection("users").doc(user.uid).get();
      const name = doc.exists ? doc.data().name : "Usuario";

      alert("Bienvenido, " + name);
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  }

  // Cierre de sesión
  function logout() {
    auth.signOut().then(() => {
      alert("Sesión cerrada");
    });
  }
</script>
