// Formulário Interativo de Inscrição

// Crie um formulário HTML com campos para nome, idade e e-mail, além de um botão de envio. Utilize as tags input, e button.
// Quando o formulário for submetido, crie uma função JavaScript que valide os campos:
// O nome deve ter pelo menos 3 caracteres.
// A idade deve ser um número positivo.
// O e-mail deve conter "@".
// Exiba uma mensagem no HTML informando se os dados estão corretos ou não.

function validar(event) {
  event.preventDefault()
  const name = document.querySelector('#name');
  const number = document.querySelector('#number');
  const email = document.querySelector('#email');
  const texto = document.querySelector('#validacao')
  if(name.value.length >= 3 && number.value > 0 && email.validity.valid) {
    texto.textContent = 'Os dados estão corretos!'
  } else {
    texto.textContent = 'Os dados não estão corretos, tente novamente.'
 }
}