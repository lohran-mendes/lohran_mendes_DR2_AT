// Biblioteca de Validações
function has5(value) {
  if (value.length >= 5) {
    alert(`${value} tem no mínimo 5 caracteres.`)
    return true;
  }
  else {
    alert(`"${value}" NÃO tem o mínimo de 5 caracteres.`)
    return false
  }
}
function bigger15(value, conditionalToInit) {
  if (conditionalToInit === true) {
    if (value.length > 15) alert(`${value} tem mais que 15 caracteres.`)
    else alert(`"${value}" NÃO tem mais que 15 caracteres.`)
  }
}
function hasCpf(value) {
  if (value.includes('cpf')) alert(`A string "${value}" contém a palavra cpf`)
  else alert(`"${value}" NÃO contém a palavra cpf`)
}

// Crie uma aplicação que obtenha uma string através de um prompt e informe:
// Se a string tem no mínimo 5 caracteres.
// Se a string tem no máximo 15 caracteres.
// Se a string contém a palavra “cpf” (em minúsculo).
// Crie funções em uma biblioteca para executar as 3 verificações solicitadas.
const inputString = prompt('Insira a string')

bigger15(inputString, has5(inputString));
hasCpf(inputString);