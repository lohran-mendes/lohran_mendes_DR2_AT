// Endereço IP

// Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. 
// Os endereços no intervalo de 0 a 127 são classe A, de 128 a 191 são classe B, de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E. 
// Crie um programa que leia o primeiro octeto, no formato de um número inteiro, de um endereço IP e informe a sua classe. Use prompt e alert.
const addressInput = prompt("Digite aqui o seu endereço IP");
let finalText = "não é válido.";

if (Number(addressInput) >= 0) {
  const firstOctato = addressInput.slice(0, 3);
  if (firstOctato <= 127) finalText = "é da classe A";
  else if (firstOctato <= 191) finalText = "é da classe B";
  else if (firstOctato <= 223) finalText = "é da classe C";
  else if (firstOctato <= 239) finalText = "é da classe D";
  else if (firstOctato >= 240) finalText = "é da classe E";
}

alert(
  `O endereço do IP "${addressInput === "" ? 0 : addressInput}" ${finalText}`
);
