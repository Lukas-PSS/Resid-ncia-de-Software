/*Criar um programa que calcule o preço total da conta
Criar const para taxa de imposto
Criar const para preço do telefone
Criar const para preço de acessório
Criar const para limite de gastos

var saldo bancário

adicionar um toFixed de (2) e formatar o preço em String ($)
*/
const LIMITE = 200;
const TAXA = 0.08;
const TELEFONE = 99.99;
const ACESSORIO = 9.99;

var SALDO_BANCARIO = 303.91;
var MONTANTE = 0;
var controle=true ;

function calc_taxa(){
    var valor = 0;
    if (MONTANTE<LIMITE){valor= (1+TAXA)*(ACESSORIO+TELEFONE);}
        else {valor= (1+TAXA)*TELEFONE;}
    return valor;
}

function formatacao(valor){
    var formt = valor;
    return "$" +formt.toFixed(2);
}

controle = confirm("Deseja realizar uma compra?");

while (SALDO_BANCARIO>=calc_taxa()&&controle){
    MONTANTE+=calc_taxa();
    SALDO_BANCARIO-=calc_taxa();
    alert ("O valor da compra foi: "+formatacao(calc_taxa()));
    controle = confirm("Quer continuar comprando? Seu saldo é: "+formatacao(SALDO_BANCARIO)+"= Seu montante é: "+formatacao(MONTANTE));
}
alert ("Seu saldo bancário é de: "+formatacao(SALDO_BANCARIO));