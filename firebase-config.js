import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtgfGJyv1IR0ZfOR5TLkkCXphmQ21sUTQ",
  authDomain: "teste-firebase-2-ab055.firebaseapp.com",
  databaseURL: "https://teste-firebase-2-ab055-default-rtdb.firebaseio.com",
  projectId: "teste-firebase-2-ab055",
  storageBucket: "teste-firebase-2-ab055.appspot.com",
  messagingSenderId: "104641738429",
  appId: "1:104641738429:web:61805f610a8636d7e069d4",
  measurementId: "G-Y0GKD7L3ZC",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
