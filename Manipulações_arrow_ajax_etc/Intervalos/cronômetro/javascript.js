// a função timer foi criada fora do bloco, pois como se trata de uma variável let, ela só poderia ser usada no bloco em que ele foi criada, então criamos fora, para ela pertecer ao documento todo, e poder ser usada em qualquer bloco que esteja no documento, no caso pelas funções começar e parar
let timer;

// a função comecar serve para quando clicarmos no botão começar, ele execute a função showtime para exebir a hora na tela. A variável timer, receberá o setInterval que serve para setar um intervalo, no caso o ele setará a função showtime a cada 1000 miléssimos, que equivale a um segundo.
function comecar() {
    timer = setInterval(showtime, 1000);
    
}
// A função parar irá limpar o setinterval, usando o clearInterval, que está na função timer
function parar() {
    clearInterval(timer);
    
}

// A função zerar irá buscar algum elemento que está com a classe demo e inserir no documento HTML o '00:00:00
function zerar() {
    document.querySelector(".demo").innerHTML = '00:00:00'
} 

    
// A função showtime foi criada para buscar as informações de data e hora do computador, com função new.Date(), ele irá inserir na variável d as informações de data e hora que estão no computador, e com as funções d.getHours(), pegará a hora que está dentro da variável d, e o mesmo faz com as funções que estão nas variáveis m e s
function showtime() {
    
    let d = new Date(); // exibe todos os dados de data e hora
    let h = d.getHours(); // depois informamos o d.getHours() para exibir a hora que está na variável d
    let m = d.getMinutes(); // depois informamos o d.getMinutes() para exibir os minutos que está na variável d
    let s = d.getSeconds(); // depois informamos o d.getSeconds() para exibir os segundos que está na variável d

     // a variável txt irá receber  as variáves h, m e s
    let txt = 
    (h < 10 ? "0" + h : h) +
    ":" +(m < 10 ? "0" + m : m) +
    ":" +(s < 10 ? "0" + s : s)
    // o formato acima serve para quando a hora, minuto ou segundo for menor que 10 (dois dígitos), ele inserir um zero na frente, se não ele faria da segunte maneira a frente 1:9:3, mas com esse formato ele fará assim 01:09:03 (uma, nove minutos e três segundos)
    document.querySelector(".demo").innerHTML = txt;
    
} 






