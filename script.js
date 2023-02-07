const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxLength = textarea.getAttribute('maxlength');
counter.innerHTML = `${maxLength}`;
const paragraphs = document.getElementsByTagName('p');
const formData = document.getElementById('form-data');
const evaluationForm = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const nota = document.getElementsByClassName('nota');
const family = document.getElementsByClassName('family');
const subject = document.getElementsByClassName('subject');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);

function createRadios() {
  const rate = document.getElementById('rate');
  for (let index = 1; index <= 10; index += 1) {
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'rate');
    radio.setAttribute('value', `${index}`);
    radio.setAttribute('id', `rate${index}`);
    radio.setAttribute('class', 'nota');
    const label = document.createElement('label');
    label.setAttribute('for', `rate${index}`);
    label.innerText = `${index}`;
    rate.appendChild(radio);
    rate.appendChild(label);
  }
}

createRadios();

function btnChecker() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('change', btnChecker);

textarea.addEventListener('input', (text) => {
  const { length } = text.target.value;
  const characters = maxLength - length;
  counter.innerHTML = `${characters}`;
});

function checkRating() {
  let rating = '';

  for (let index = 0; index < nota.length; index += 1) {
    if (nota[index].checked) {
      rating = nota[index].value;
    }
  }
  return rating;
}

function checkFamily() {
  let familia = '';

  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      familia = family[index].value;
    }
  }
  return familia;
}

function checkSubjects() {
  const subjects = [];

  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subjects.push(` ${subject[index].value}`);
    }
  }
  return subjects;
}

submitBtn.addEventListener('click', (click) => {
  evaluationForm.style.display = 'none';
  formData.style.display = 'flex';
  formData.style.flexDirection = 'column';
  paragraphs[0].innerHTML = `Nome: ${inputName.value} ${inputLastName.value}`;
  paragraphs[1].innerHTML = `Email: ${inputEmail.value}`;
  paragraphs[2].innerHTML = `Casa: ${house.value}`;
  paragraphs[3].innerHTML = `Família: ${checkFamily()}`;
  paragraphs[4].innerHTML = `Matérias:${checkSubjects()}`;
  paragraphs[5].innerHTML = `Avaliação: ${checkRating()}`;
  paragraphs[6].innerHTML = `Observações: ${textarea.value}`;
  click.preventDefault();
});
