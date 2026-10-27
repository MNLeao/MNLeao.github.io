function cor(colorir){
    document.getElementById('texto').style.color = colorir

}
function tamanho(size){
    document.getElementById('texto').style.fontSize = size
}
function fonte(font){
    document.getElementById('texto').style.fontFamily = font
}
function backgroundColor(colorBackground){
    document.getElementById('texto').style.backgroundColor = colorBackground
}
function restaurar(){
    document.getElementById('texto').style.backgroundColor = 'white'
    document.getElementById('texto').style.color = 'black'
    document.getElementById('texto').style.fontSize = '16px'
    document.getElementById('texto').style.fontFamily = 'Times New Roman'
}