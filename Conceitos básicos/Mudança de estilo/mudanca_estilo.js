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
    document.getElementById("titulo").classList.remove('azul', 'vermelho', 'verde'); // dessa maneira eu removo todas as classes em uma única linha de código, senão teria que criar uma linha para remover a classe azul, outra para o vermelho e depois para o verde.

    //document.getElementById("titulo").classList.remove('vermelho');
    //document.getElementById("titulo").classList.remove('verde');
}

function mostrartelefone(elemento) {
    elemento.style.display = 'none';
    document.getElementById("telefone").style.display = 'block';
}

function ocultartelefone(elemento) {
    //document.querySelectorAll('button')[3].style.display = 'block' // esse código serve para exibir novamente o botão mostrartelefone
    document.getElementById("telefone").style.display = 'none';
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