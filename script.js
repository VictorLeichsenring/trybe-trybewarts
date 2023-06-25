const btnEnviarHeader = document.getElementById('btn-enviar-header');
const inputEmailHeader = document.getElementById('input-email-header');
const inputSenhaHeader = document.getElementById('input-password-header');
const mainElement = document.getElementById('main');
const evaluationForm = document.getElementById('evaluation-form');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseSelect = document.getElementById('house');
const familyRadios = document.getElementsByName('family');
const subjectCheckboxes = document.getElementsByClassName('subject');
const rateRadios = document.getElementsByName('rate');
const comentario = document.getElementById('textarea');
const checkboxAgreement = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');
const counter = document.getElementById('counter');

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

function createElementWithText(type, text) {
  const element = document.createElement(type);
  element.innerText = text;
  return element;
}

function appendCheckedValue(parent, elements, prefix) {
  for (const item of elements) {
    if (item.checked) {
      parent.appendChild(createElementWithText('p', `${prefix}: ${item.value}`));
      break;
    }
  }
}

function appendCheckedValues(parent, elements, prefix) {
  const values = [];
  for (const item of elements) {
    if (item.checked) {
      values.push(item.value);
    }
  }
  if (values.length > 0) {
    parent.appendChild(createElementWithText('p', `${prefix}: ${values.join(', ')}`));
  }
}

function createFormData() {
  const formText = document.createElement('form');
  formText.id = 'form-data';
  const formTextContent = `Nome: ${nameInput.value} ${lastNameInput.value}`;
  formText.appendChild(createElementWithText('p', formTextContent));
  formText.appendChild(createElementWithText('p', `Email: ${emailInput.value}`));
  formText.appendChild(createElementWithText('p', `Casa: ${houseSelect.value}`));
  appendCheckedValue(formText, familyRadios, 'Família');
  appendCheckedValues(formText, subjectCheckboxes, 'Matérias');
  appendCheckedValue(formText, rateRadios, 'Avaliação');
  formText.appendChild(createElementWithText('p', `Observações: ${comentario.value}`));
  return formText;
}

function submit(event) {
  event.preventDefault();
  const formText = createFormData();
  mainElement.appendChild(formText);
  evaluationForm.style.display = 'none';
}

btnEnviarHeader.addEventListener('click', login);
checkboxAgreement.addEventListener('change', agreementChange);
comentario.addEventListener('input', changeCounter);
btnSubmitForm.addEventListener('click', submit);
