/* 

OPERADORES MATEMÁTICOS
Retornam sempre em números.

Adição: +
Subtração: -
Multiplicação: *
Divisão: /
Resto divisão %
Potenciação **

*/

/*

OPERADORES COMPARATIVOS
Retornam sempre com "true" (verdadeiro) e "false" (falso).

Maior: >
Maior ou igual: >=
Menor: <
Menor ou igual: <=
Igual: ==
Diferente: !=

*/

function jogar(){
    n1 = Number(document.getElementById('numero1').value)
    n2 = Math.random()
    if(document.getElementById('numero1').value == 12 % 2 ){
       
    }else{
        document.getElementById('resultado').innerText= 'Este número é ímpar.'
    }
} //INCOMPLETO