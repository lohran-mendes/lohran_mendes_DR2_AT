// Bissexto

// Crie um sistema que solicite um ano por prompt e informe se o ano é bissexto ou não.
const anoPerguntado = Number(
  prompt("Insira o ano para saber se ele é bissexto")
);
const anoBissexto = new Date(anoPerguntado, 1, 29);

if (anoBissexto.getDate() === 29) {
  alert(anoPerguntado + " é ano bissexto");
} else if (anoBissexto.getDate() === 1) {
  alert(anoPerguntado + " não é ano bissexto");
} else {
  alert("Insira um ano válido.");
}
