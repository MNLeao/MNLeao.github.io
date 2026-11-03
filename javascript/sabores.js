function painel(){
    // ENTRADA DE VARIÁVEIS
    h = document.getElementById('altura').value
    p = document.getElementById('caixadetexto').value
    l = document.getElementById('largura').value
    c = document.getElementById('colores').value
    i = document.getElementById('coloro').value

    // DEFINIR CAIXA
   caixa = document.getElementById('caixa')
   
    // EDITAR CAIXA
   caixa.innerHTML = p
   caixa.style.width = l + 'px'
   caixa.style.height = h + 'px'
   caixa.style.backgroundColor = c
   caixa.style.borderColor = i
}