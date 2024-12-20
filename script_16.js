// Calculadora de Diferença entre Datas

// Crie um formulário HTML com dois campos de data (input type="date").
// Quando o usuário selecionar as duas datas e clicar em um botão "Calcular", crie uma função JavaScript que calcule a diferença em dias entre as duas datas usando o objeto Date.
// Exiba o resultado (número de dias de diferença) na página HTML.
// Adicione uma validação que verifique se as datas inseridas são válidas e se a data final é maior que a data inicial. Se não forem, exiba uma mensagem de erro no HTML.
// Assim que terminar, salve todos os links para os exercícios realizados em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR2_AT.PDF” e poste como resposta ao AT.
function formataData(data) {
  const arrayData = data.split('-')
  return arrayData
}
function calcular(event) {
  event.preventDefault()
  const texto = document.querySelector('#validacao')
  const dataInput1 = document.querySelector('#date1');
  const dataInput2 = document.querySelector('#date2');
  const arrayData1 = formataData(dataInput1.value)
  const arrayData2 = formataData(dataInput2.value)
  const data1 = new Date(arrayData1[0], arrayData1[1], arrayData1[2])
  const data2 = new Date(arrayData2[0], arrayData2[1], arrayData2[2])
  const diferencaEntreDatas = data2 - data1;
  const dias = ((diferencaEntreDatas / 1000) / 3600) / 24;
  if (dias >= 0) {
    texto.textContent = `Há ${dias} dia(s) de diferença entre as datas.`
  } else texto.textContent = `As datas inseridas são inválidas para a comparação.`
}