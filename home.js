import { auth, database } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    alert("Usuário não está autenticado!");
    window.location.href = "index.html";
    return;
  }

  const snapshot = await get(ref(database, `users/${userId}`));
  if (snapshot.exists()) {
    const { name } = snapshot.val();
    document.getElementById("welcome-message").textContent = `Bem-vindo à página home, ${name || "Usuário"}`;
  }
});
