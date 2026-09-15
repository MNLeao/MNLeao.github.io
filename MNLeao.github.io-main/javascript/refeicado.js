function boasVindas(){
    nome = document.getElementById('nome').value
    document.getElementById('mensagem').innerText = 'Boas vindas ' + nome
}
function somar(){
    numero1 = Number(document.getElementById('numero1').value)
    numero2 = Number(document.getElementById('numero2').value)
    numero3 = numero1 + numero2
    document.getElementById('resultado').innerText ='A soma entre ' + numero1 + ' e ' + numero2 + ' é igual a ' + numero3
}function calcular(){
    nick = document.getElementById('name').value
    ano = Number(document.getElementById('ano').value)
    ano2 = 2026
    result = ano2 - ano
    document.getElementById('frase').innerText ='Olá ' +nick+ ', você tem ' +result+ ' anos. Certo?'
}