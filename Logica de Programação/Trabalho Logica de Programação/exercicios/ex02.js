/*Faça um programa que leia a idade de uma pessoa expressa 
em anos, meses e dias e mostre-a expressa apenas em dias.*/

var categoria ;

var idade = window.prompt("Insira a idade do Nadador")

    if(idade >= 5 && idade<=7){
        categoria = "Infantil A";
        }else if(idade >= 8 && idade<=10){
            categoria = "infantil B" ;
            }else if(idade >= 11 && idade<=13){
                categoria = "juvenil A";
                }else if(idade >= 14 && idade<=17){
                    categoria = "juvenil B";
                    } else if (idade >= 18) 
                        categoria = "Adulto";
                        else if (idade<5){
                            categoria = "Muito novo para natação";
                        }
                                
    console.log ("O Nadador é " + categoria)