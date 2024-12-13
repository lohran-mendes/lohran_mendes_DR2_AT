// Sistema de Login

// Crie um sistema onde o usuário digita um nome de usuário e senha utilizando prompt.
// Verifique se as credenciais estão corretas (defina valores fixos para nome de usuário e senha em JavaScript, como user: admin, password: 1234).
// Mostre um alert com a mensagem correta, conforme se o login foi bem sucedido ou não.
const user = 'admin';
const password = '1234';

function loginSystem() {
  const userName = prompt('Insira o nome do usuário.');
  const userPassword = prompt('Insira a senha do usuário.');
  if (userName === user && userPassword === password) {
    alert('Login confirmado, seja bem vindo!')
  } else alert('Login Inválido, tente novamente!')
}
loginSystem();