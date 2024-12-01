import { auth, database } from "./firebase-config.js";
import { ref, get, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const userId = auth.currentUser.uid;

document.addEventListener("DOMContentLoaded", async () => {
  const snapshot = await get(ref(database, `users/${userId}`));
  if (snapshot.exists()) {
    const data = snapshot.val();
    document.getElementById("name").value = data.name || "";
    document.getElementById("age").value = data.age || "";
    document.getElementById("profession").value = data.profession || "";
  }
});

document.getElementById("info-edit-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const profession = document.getElementById("profession").value;

  update(ref(database, `users/${userId}`), { name, age, profession }).then(() =>
    alert("Informações atualizadas!")
  );
});
