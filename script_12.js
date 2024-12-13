// Fábrica de Doces

// Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos. 
// Construa um programa que obtenha a quantidade de doces fabricados e informe quantas caixas completas vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
// Distribuir os doces por caixas grandes (com 40 doces), médias (com 30 doces) e pequenas (com 20 doces).
const quantidadeDoces = Number(prompt('quantidade de doces'));

const extensoCaixas = ['pequenas', 'médias', 'grandes'];
const numeroCaixas = [20, 30, 40];
let textoFinal = `${quantidadeDoces} doces em:`;
let ou = ''

if (quantidadeDoces > 20) {
  for (let i = 0; i < numeroCaixas.length; i++) {
    if (quantidadeDoces % numeroCaixas[i] == 0) {
      textoFinal += ` ${ou} ${quantidadeDoces / numeroCaixas[i]} caixa(s) ${extensoCaixas[i]}`;
      ou = 'ou';
    } else if (quantidadeDoces / numeroCaixas[i] > 1 && quantidadeDoces % numeroCaixas[i] > 0) {
      textoFinal += ` ${ou} ${Math.floor(quantidadeDoces / numeroCaixas[i])} caixa(s) ${extensoCaixas[i]} e 1 ${extensoCaixas[i == 0 ? i : i - 1].slice(0, -1)} adicional`
      ou = 'ou'
    }
  }
  alert(textoFinal)
} else if (quantidadeDoces > 0) {
  textoFinal += ` uma caixa pequena`;
  alert(textoFinal)
} else alert('O valor inserido não é válido.')