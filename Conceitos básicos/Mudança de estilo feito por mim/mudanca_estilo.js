function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');
    
}

function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
    
}

function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');
        
}

function limpar() {
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}

function mostrartelefone(elemento) {
    ocultar();
    document.getElementById("telefone").classList.add('mostrar');
}

function ocultartelefone(elemento) {
    ocultar();
    document.getElementById("telefone").classList.add('ocultar');
}

function ocultar() {
    document.getElementById("telefone").classList.remove('mostrar');
    document.getElementById("telefone").classList.remove('ocultar');
}





/*function mostrartexto() {
    document.getElementById("texto").style.display = 'block';
    
}*/

function mostrartexto() {
    limpartexto();
    document.getElementById("texto").classList.add('mostrartexto');
    
}

function ocultartexto() {
    limpartexto();
    document.getElementById("texto").classList.add('ocultartexto');
    
}

function limpartexto() {
    document.getElementById("texto").classList.remove('mostrartexto');
    document.getElementById("texto").classList.remove('ocultartexto');
}