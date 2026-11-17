function roll(){
    raridade = 1 / Number(document.getElementById('raridade').value)
    baus = Number(document.getElementById('bausabertos').value)
    chance = 1 - Math.pow(1-raridade, baus*4)
    chancePercentual = (chance*100).toFixed(1)+'%'
    hora = Number(document.getElementById('hora').value)
    tempo = (baus / hora).toFixed(0)
    document.getElementById('saida').innerHTML = 
    'A chance de você ter pego o totem até agora é de ' + chancePercentual + ' em  ' + tempo + ' horas.'
}