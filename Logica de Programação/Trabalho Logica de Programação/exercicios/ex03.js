   /*uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, 
conforme a tabela abaixo. 
Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário. 
Se o cargo do funcionário não estiver
na tabela, ele deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.

CódigoCargo         Percentual
101         Gerente     10%
102         Engenheiro  20%
103         Técnico     30%
*/
var novoSalario;
var salario = prompt("Salário: R$");
salario = Number(salario);
var cargo = prompt("Cargo: ");
cargo = cargo.toUpperCase().normalize('NFD').replace(/[\u0300-\u035f]/g, '');
if (cargo == "GERENTE") {
  novoSalario = salario + 0.1 * salario;
} else if (cargo == "ENGENHEIRO") {
  novoSalario = salario + 0.2 * salario;
} else if (cargo == "TECNICO") {
  novoSalario = salario + 0.3 * salario;
} else {
  novoSalario = salario + 0.4 * salario;
}

console.log("Salário antigo = R$" + salario);
console.log("Novo salário = R$" + novoSalario);
console.log("Diferença = R$" + (novoSalario - salario));