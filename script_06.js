// Jogo de Adivinhação

// Peça ao usuário para adivinhar o número usando prompt.
// Gere um número aleatório entre 1 e 100.
// Exiba mensagens como "Muito alto", "Muito baixo", ou "Correto!" com alert. 
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function initGame() {
  const inputNumber = parseInt(prompt('Insira o número'))
  if (inputNumber > randomNumber) {
    alert('Muito alto')
  }
  else if (inputNumber < randomNumber) {
    alert('Muito baixo')
  }
  else if (inputNumber === randomNumber) {
    return alert('Correto')
  }
  else {
    alert('Insira um valor válido!')
  }
  initGame()
}
initGame()