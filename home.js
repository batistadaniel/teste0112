import { auth, database } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);
    const data = snapshot.val();
    const name = data?.name || "Usuário";

    document.getElementById("welcome-message").textContent = `Bem-vindo à página Home, ${name}`;
  } else {
    window.location.href = "index.html";
  }
});
