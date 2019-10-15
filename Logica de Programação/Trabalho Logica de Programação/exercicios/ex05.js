/* escrever um algoritmo que lê um valor em reais e calcula qual o menor número possível
 de notas de 100, 50, 10, 5 e 1 em que o
valor lido pode ser decomposto. Escrever o valor lido e a relação de notas necessárias.*/

var valor = prompt("Valor = ");
console.log("Valor digitado = " + valor);
var nota100 = 0;
var nota50 = 0;
var nota10 = 0;
var nota5 = 0;
var nota1 = 0;

while (valor > 0) {
  if (valor >= 100) {
    nota100 = Math.trunc(valor / 100);
    valor = valor%100
  } else if (valor >= 50) {
    nota50 = Math.trunc(valor / 50);
    valor = valor%50
  } else if (valor >= 10) {
    nota10 = Math.trunc(valor / 10) ;
    valor = valor%10
  } else if (valor >= 5) {
    nota5 = Math.trunc(valor / 5);
    valor = valor%5
  } else if (valor >= 1) {
    nota1 = Math.trunc(valor / 1);
    valor = valor%1
  }
} 

console.log("Notas de 100 = " + nota100);
console.log("Notas de 50 = " + nota50);
console.log("Notas de 10 = " + nota10);
console.log("Notas de 5 = " + nota5);
console.log("Notas de 1 = " + nota1);