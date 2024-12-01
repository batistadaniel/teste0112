import { auth } from "./firebase-config.js";
import { signOut, deleteUser } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { database } from './firebase-config.js'; // importa a configuração do banco de dados

// Função para excluir a conta do usuário
const deleteUserAccount = async () => {
  const user = auth.currentUser;

  if (user) {
    try {
      // Remover os dados do usuário no Realtime Database
      const userRef = ref(database, 'users/' + user.uid); // Ref para o nó do usuário
      await remove(userRef); // Remove os dados do usuário no banco de dados

      // Excluir o usuário da autenticação do Firebase
      await deleteUser(user); // Exclui o usuário autenticado
      console.log('Usuário excluído com sucesso!');
      alert('Sua conta foi excluída com sucesso.');

      // Redirecionar o usuário para a página de login ou outro lugar
      window.location.href = 'login.html'; // Exemplo: redirecionar para a página de login
    } catch (error) {
      console.error('Erro ao excluir o usuário:', error);
      alert('Ocorreu um erro ao tentar excluir sua conta. Tente novamente.');
    }
  } else {
    alert('Usuário não autenticado.');
  }
};

// Função para realizar o logout
document.getElementById("logout-button")?.addEventListener("click", async () => {
  await signOut(auth); // Realiza o logout
  window.location.href = "index.html"; // Redireciona para a página de login
});

// Função para excluir a conta
document.getElementById("delete-account-button")?.addEventListener("click", deleteUserAccount);
