let divContent = document.querySelector('.content');
let divSecondaryContent = document.querySelector('.secondary-content');
let email = document.getElementById('email');
let textEmail = document.getElementById('required-text');
let formularioEnviar = document.getElementById('form');

email.addEventListener('keyup', () => {
  if (validatorEmail(email.value) !== true) {
    textEmail.textContent = 'Valid email required';
  } else {
    textEmail.textContent = '';
  }
});

formularioEnviar = addEventListener('submit', (event) => {
  event.preventDefault();

  if (validatorEmail(email.value)) {
    divContent.classList.add('display');
    divSecondaryContent.classList.remove('display');
  } else {
    alert('Email inválido');
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}
