const btnEnviarHeader = document.getElementById('btn-enviar-header');
const inputEmailHeader = document.getElementById('input-email-header');
const inputSenhaHeader = document.getElementById('input-password-header');

function login() {
  if (inputEmailHeader.value === 'tryber@teste.com' && inputSenhaHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEnviarHeader.addEventListener('click', login);
