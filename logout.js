import { auth } from "./firebase-config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById("logout-button")?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});
