import { auth } from "./firebase-config.js";
import { signOut, deleteUser } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { database } from './firebase-config.js'; 

// Função para excluir a conta do usuário
const deleteUserAccount = async () => {
  const user = auth.currentUser;

  if (user) {
    try {
      console.log('Tentando excluir o usuário...');
      // Remover os dados do usuário no Realtime Database
      const userRef = ref(database, 'users/' + user.uid);
      await remove(userRef);

      // Excluir o usuário da autenticação do Firebase
      await deleteUser(user);
      console.log('Usuário excluído com sucesso!');
      alert('Sua conta foi excluída com sucesso.');

      // Redireciona o usuário para a página de login
      window.location.href = 'login.html';
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
      alert('Ocorreu um erro ao tentar excluir sua conta. Tente novamente.');
    }
  } else {
    console.log('Usuário não autenticado.');
    alert('Usuário não autenticado.');
  }
};

// Função para realizar o logout
document.getElementById("logout-button")?.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

// Função para excluir a conta
document.getElementById("delete-account-button")?.addEventListener("click", () => {
  console.log('Botão de excluir conta clicado');
  deleteUserAccount(); // Chama a função de exclusão
});
