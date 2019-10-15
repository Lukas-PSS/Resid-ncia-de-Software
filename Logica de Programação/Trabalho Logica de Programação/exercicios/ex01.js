
//faça um programa que leia a idade de uma pessoa expressa em anos,
// meses e dias e mostre-a expressa apenas em dias.


// Obs: O códico esta complicado, mas esta funcioando bem.

var now = new Date();
var anoAtual = now.getFullYear();
var mesAtual = now.getMonth() +1;
var diaAtual = now.getDate();
nascDia = prompt("Dia em que Nasceu: ");
nascMes = prompt("Mês: ");
nascAno = prompt("Ano: ");


if(nascMes>mesAtual){
        var AnoVida = anoAtual - nascAno -1;
    }else if(nascMes<mesAtual){
        var AnoVida = anoAtual - nascAno ;
    }else if (nascMes == mesAtual && nascDia <= diaAtual){
        var AnoVida = anoAtual - nascAno;
    }else if(nascMes == mesAtual && nascDia > diaAtual){
        var AnoVida = anoAtual - nascAno -1 ;
    }

if (nascMes > mesAtual && nascDia == diaAtual){
        var somarMes = 12 - (nascMes - mesAtual);
    }else if(nascMes > mesAtual){
        var somarMes = 12 - (nascMes - mesAtual) -1;
    }else if (nascMes == mesAtual && nascDia == diaAtual){
        var somarMes = (mesAtual - nascMes);
        console.log("Happy BirthDay!! Você esta completando " + AnoVida + " anos de vida");
    }else if (nascMes <= mesAtual && nascDia == diaAtual){
        var somarMes = (mesAtual - nascMes);
    }else if (nascMes < mesAtual){
        var somarMes = (mesAtual - nascMes) - 1;
    }else if (nascMes == mesAtual && nascDia < diaAtual){
        var somarMes = nascMes - mesAtual;
    }else if(nascMes == mesAtual && nascDia > diaAtual){
        var somarMes = 12 - (nascMes - mesAtual + 1) ;
    }
    
if(nascDia > diaAtual){
    var somarDias = 30.43 - (nascDia - diaAtual);
    }else if (nascDia <= diaAtual){
    var somarDias = diaAtual - nascDia;
    }


var MesesVida = AnoVida * 12 + somarMes;
var DiasVida = Math.trunc((AnoVida * 365.25) +(somarMes * 30.43) + somarDias);
    
console.log("Você viveu " + DiasVida + " dias");






//faça um programa que leia a idade de uma pessoa expressa em anos,
// meses e dias e mostre-a expressa apenas em dias.


// Obs: Depois que apliquei function, funcionou melhor.


var now = new Date();
var anoAtual = now.getFullYear();
var mesAtual = now.getMonth() +1;
var diaAtual = now.getDate();
nascDia = prompt("Dia em que Nasceu: ");
nascMes = prompt("Mês: ");
nascAno = prompt("Ano: ");


    
console.log("Você viveu " + calcDiasVida() + " dias");




function calcAnosVida (){
    if(nascMes>mesAtual){
            AnoVida = anoAtual - nascAno -1;
        }else if(nascMes<mesAtual){
            AnoVida = anoAtual - nascAno ;
        }else if (nascMes == mesAtual && nascDia <= diaAtual){
            AnoVida = anoAtual - nascAno;
        }else if(nascMes == mesAtual && nascDia > diaAtual){
            AnoVida = anoAtual - nascAno -1 ;
        }
        return(AnoVida)
    }

function calcMesesVida (){
    if (nascMes > mesAtual && nascDia == diaAtual){
            somarMes = 12 - (nascMes - mesAtual);
        }else if(nascMes > mesAtual){
            somarMes = 12 - (nascMes - mesAtual) -1;
        }else if (nascMes == mesAtual && nascDia == diaAtual){
            somarMes = (mesAtual - nascMes);
            console.log("Happy BirthDay!! Você esta completando " + AnoVida + " anos de vida");
        }else if (nascMes <= mesAtual && nascDia == diaAtual){
            somarMes = (mesAtual - nascMes);
        }else if (nascMes < mesAtual){
            somarMes = (mesAtual - nascMes) - 1;
        }else if (nascMes == mesAtual && nascDia < diaAtual){
            somarMes = nascMes - mesAtual;
        }else if(nascMes == mesAtual && nascDia > diaAtual){
            somarMes = 12 - (nascMes - mesAtual + 1) ;
        }
        MesesVida = somarMes + calcAnosVida() * 12;
        return(MesesVida);
    }
  function calcDiasVida(){  
    if(nascDia > diaAtual){
        somarDias = 30.43 - (nascDia - diaAtual);
        }else if (nascDia <= diaAtual){
         somarDias = diaAtual - nascDia;
        }
        DiasVida = Math.ceil(calcMesesVida() * 30.43 + somarDias + ((calcAnosVida() / 4) * 0.25));
        return(DiasVida);
    } 



    
