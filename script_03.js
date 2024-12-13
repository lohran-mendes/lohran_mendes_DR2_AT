// Calculadora Simples

// Use o prompt para obter um número.
// Em seguida use outro prompt para obter uma operação aritmética.
// Em seguida use outro prompt para obter um outro número.
// Exiba o resultado em um alert.
function simpleCalculator() {
  const number1 = Number(prompt('Coloque um número'))
  const operator = prompt('Coloque um o operador')
  const number2 = Number(prompt('Coloque o segundo número'))
  if (!isNaN(number1) && !isNaN(number2)) {
    let result = 0;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      case '%':
        result = number1 % number2;
        break;

      default:
        alert('O operador inserido não é válido.')
        return
    }

    alert(`O resultado de ${number1} ${operator} ${number2} é igual a: ${result}`)
  } else alert("Tem que ser inserido dois números!")
}
simpleCalculator()