// Funções matemáticas

//Math.round(), arredonda números, para cima ou para baixo, veja o exemplo de baixo

/*let numero = Math.round(3.68);

console.log(numero) */

//Math.floor(), arredonda números para baixo, mesmo que o número seja 3.99, ele arredondará para 3, veja o exemplo abaixo

/*let numero = Math.floor(3.68);

console.log(numero)*/

//Math.ceil(), arredonda números para cima, mesmo que o número seja 3.01, ele arredondará para 4, veja o exemplo abaixo

/*let numero = Math.ceil(3.01);

console.log(numero) */

//Math.abs(), exibe o número absoluto(positivo), veja o exemplo abaixo

/*let numero = Math.abs(-545454546565);

console.log(numero)*/

//Math.min(), exibe o menor número de uma lista, veja o exemplo abaixo



/*let numero = Math.min(2, 200, 350, 1, 150, -10);

console.log(numero) 

let numeros = [1, 6, 8, 95, 10, 25]

 //let numeros2 = Math.min(...numeros)

 console.log(Math.min(...numeros))*/

 

//Math.max(), exibe o maior número número de uma lista, veja o exemplo abaixo

/*let numero = Math.max(2, 200, 350, 1, 150, -10);

console.log(numero) */

//Math.random(), exibe um número aleatório entre 0 e 1, é muito usado para sistemas de sorteio, veja o exemplo abaixo, que usamos combinando com a funcção Math.floor, para ele arredondar para baixo, multiplicando por o limite de numero que eu quero, no caso ele geraria até o número 99.

/*let numero = Math.floor(Math.random() * 100);

console.log(numero)

function teste3() {
    let x = document.querySelector('#teste').value;
    let y = document.querySelector('#teste2').value;
    let z = document.querySelector('#teste3').value;
    let texto3 = '';  
    let pegar = [x, y, z];
    let sorteio = Math.floor(Math.random() * pegar.length);

    texto3 = 'O GANHADOR É: '+pegar[sorteio];      
   
           
    document.querySelector('#texto3').innerHTML = texto3;
 } */

 

 
 

