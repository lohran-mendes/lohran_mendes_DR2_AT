// Data Futura

// Desenvolva uma aplicação que solicite dia, mês e ano via prompts separados de uma data futura e mostre quantos dias, horas e minutos faltam para 
const dia = parseInt(prompt("Entre com o dia.")) 
const mes = parseInt(prompt("Entre com o mês.") )
const ano = parseInt(prompt("Entre com o ano.") )

const dataHoje = new Date();
const dataFutura = new Date(ano, mes - 1, dia);

if (dataFutura <= dataHoje || isNaN(dia)|| isNaN(mes)|| isNaN(ano)) {
  alert("Insira uma data válida.");
} else {
  const diferencaTempo = dataFutura - dataHoje;
  const diferencaMinutos = Math.floor(diferencaTempo / (60000));
  const diferencaHoras = Math.floor(diferencaMinutos / 60);
  const diferencaDias = Math.floor(diferencaHoras / 24);

  const horasRestantes = diferencaHoras % 24;
  const minutosRestantes = diferencaMinutos % 60;

  alert(`Falta ${diferencaDias} dias, ${horasRestantes} horas e ${minutosRestantes} minutos.`);
}