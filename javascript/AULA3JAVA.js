function rolar(){
    lados = Number(document.getElementById('ladosdado').value)
    Resultado = Math.floor(Math.random() * lados ) + 1
    document.getElementById('resultado').innerText = 'O resultado do sorteio no dado de ' + lados + ' lados foi: ' + Resultado
    if(Resultado == 1){
document.getElementById('resultado').innerText += '(Tirou o pior resultado posssível, seu merdinha azarado)'
}
    if(Resultado == lados){
document.getElementById('resultado').innerText += '(O grande jackpot meu amigo!)'
}
}