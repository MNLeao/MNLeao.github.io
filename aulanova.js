/*

AULA DE MANIPULAÇÃO E CONSULTA DE TEXTOS (STRINGS)

COMANDO                 RETORNO
.length                 Tamanho da String.
.charAt(5)              Caractere no índice. 
.indexOf('a')           Índice do caractere.
.slice(3,8)             Intervalo de caracteres.
.toUpperCase()          Caixa alta.
.toLowerCase()          Caixa baixa.
.trim()                 Limpa espaços não intencionais.
.split(' ')             Fatia a String.
.includes('a')          Confere se tem determinado texto.
.match(/a/gi)           Encontra textos, g = global, i = insensitive

*/  
function calcular(){
    texto = document.getElementById('texto').value.trim()
    tamanho = texto.length
    prima = texto.charAt(0)
    ult = texto.charAt(tamanho-1)
    vogais = texto.match(/[a,e,i,o,u]/gi).length
    document.getElementById('p').innerText = 'O tamanho do texto é ' + tamanho + ', a primeira letra é ' + prima + ', a última letra é ' + ult + ' e a quantidade de vogais é ' + vogais
}