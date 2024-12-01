import { auth, database } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("name").value = data.name || "";
      document.getElementById("age").value = data.age || "";
      document.getElementById("profession").value = data.profession || "";
    }

    document.getElementById("update-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const profession = document.getElementById("profession").value;

      await set(userRef, { name, age, profession });
      alert("Informações atualizadas com sucesso!");
    });
  } else {
    window.location.href = "index.html";
  }
});
