//Método de intervalor setInterval, ele vai rodar sempre após os milisegundos que foi definido na função como no exemplo abaixo.
//o clearInterval, vai para a função setInterval

let timer;

function comecar() {
    timer = setInterval(showtime, 1000);
}

function parar() {
    clearInterval(timer); 
    
}

function zerar() {
    document.querySelector(".demo").innerHTML = '00:00:00'
} 

function showtime() {
    let d = new Date(); // exibe todos os dados de data e hora
    let h = d.getHours(); // depois informamos o d.getHours() para exibir a hora que está na variável d
    let m = d.getMinutes(); // depois informamos o d.getMinutes() para exibir os minutos que está na variável d
    let s = d.getSeconds(); // depois informamos o d.getSeconds() para exibir os segundos que está na variável d

    let txt = h+':'+m+':'+s;

    document.querySelector(".demo").innerHTML = txt;
    
} 

// Método de intervalor setTimeout, o setTimeout, ele vai rodar uma única vez, após os milisegundos que foi definido na função como no exemplo abaixo.
// a função clearTimeout, serve para parar a função setTimeout

function rodar() {
    setTimeout(function(){
        document.querySelectorAll('.demo2')[0].innerHTML = 'Rodou com sucesso'
    }, 2000);
}


