function parar() {
    document.querySelector('.semaforo1').classList.remove('opacidade');
    document.querySelector('.semaforo2').classList.add('opacidade');
    document.querySelector('.semaforo3').classList.add('opacidade');
}

function atencao() {
    document.querySelector('.semaforo1').classList.add('opacidade');
    document.querySelector('.semaforo2').classList.remove('opacidade');
    document.querySelector('.semaforo3').classList.add('opacidade');
}

function siga() {
    document.querySelector('.semaforo1').classList.add('opacidade');
    document.querySelector('.semaforo2').classList.add('opacidade');
    document.querySelector('.semaforo3').classList.remove('opacidade');
}