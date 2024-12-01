import { auth, database } from "./firebase-config.js";
import { ref, get, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    alert("Usuário não está autenticado!");
    window.location.href = "index.html";
    return;
  }

  // Carregar informações do banco
  const snapshot = await get(ref(database, `users/${userId}`));
  if (snapshot.exists()) {
    const { name, age, profession } = snapshot.val();
    document.getElementById("name").value = name || "";
    document.getElementById("age").value = age || "";
    document.getElementById("profession").value = profession || "";
  }
});

document.getElementById("info-edit-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const userId = auth.currentUser.uid;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const profession = document.getElementById("profession").value;

  try {
    await update(ref(database, `users/${userId}`), { name, age, profession });
    alert("Informações atualizadas com sucesso!");
  } catch (error) {
    alert("Erro ao atualizar informações: " + error.message);
  }
});
