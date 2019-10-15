/*A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de 
broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer
saber quanto arrecadou com a venda dos pães e broas juntas, quanto deve guardar numa conta de poupança 
(10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono.
 Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular
os dados solicitados.*/


var pao = 0.12;
var broa = 1.5;
var totalPao;
var totalBroa;
var total;

totalPao = prompt("Quantos pães? ");
    totalPao = Number(totalPao) * pao;

totalBroa = prompt("Quantas broas? ");
    totalBroa = Number(totalBroa) * broa;

total = totalBroa + totalPao;
    poup = 0.1 * total;


console.log("Total de pães = R$" + totalPao);
console.log("Total de broas = R$" + totalBroa);
console.log("Custo Total = R$" + total);
console.log("Poupança = R$" + poup);