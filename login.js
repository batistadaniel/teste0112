import { auth, database } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Cadastro de usuários
document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    // Adicionando dados iniciais ao banco
    await set(ref(database, `users/${userId}`), {
      name: "",
      age: "",
      profession: "",
    });

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
});

// Login de usuários
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "home.html";
  } catch (error) {
    alert("Erro ao fazer login: " + error.message);
  }
});
