const btnEnviarHeader = document.getElementById('btn-enviar-header');
const inputEmailHeader = document.getElementById('input-email-header');
const inputSenhaHeader = document.getElementById('input-password-header');
const comentario = document.getElementById('textarea');
const counter = document.getElementById('counter');
const checkboxAgreement = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');

function login() {
  if (inputEmailHeader.value === 'tryber@teste.com' && inputSenhaHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreementChange() {
  if (checkboxAgreement.checked) {
    btnSubmitForm.disabled = false;
  } else {
    btnSubmitForm.disabled = true;
  }
}

function changeCounter() {
  const texto = comentario.value;
  const valor = texto.length;
  const caracteresFinais = 500 - valor;
  counter.innerText = caracteresFinais;
}

btnEnviarHeader.addEventListener('click', login);
checkboxAgreement.addEventListener('change', agreementChange);
comentario.addEventListener('input', changeCounter);
