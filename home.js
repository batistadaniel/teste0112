import { auth, database } from "./firebase-config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

document.getElementById("info-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = auth.currentUser.uid;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const profession = document.getElementById("profession").value;

  set(ref(database, `users/${userId}`), {
    name,
    age,
    profession,
  }).then(() => alert("Informações salvas!"));
});
