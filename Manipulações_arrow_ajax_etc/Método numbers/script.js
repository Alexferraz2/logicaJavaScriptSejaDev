// o código abaixo que está usando o toString, serve para converter qualquer conteúdo de uma variável para string, mas é mais usado para conversão de números

/* let n = 10;

let res = n.toString();

console.log(res); */

// no código abaixo usamos o toFixed para informar dentro dos parenteses até quantas casas decimais será exibido.

// no código abaixo a função parseInt() serve para transforma o conteúdo da variável que será informada dentro do parentese, em número, mas o parseInt não considera números com casas decimais, o que vier depois do ponto ele desconsidera, para manter o número com casas decimais temos que usar o parseFloat, aí sim ele considera números com casas decimais.

//A função Number() transformará a variavel que tem um valor string em número, podendo ser números int ou float



let numero = 10.6523145;

let resfixed = 'R$ '+numero.toFixed(2); //Usando a função toFixed()

console.log(resfixed);


let n = 10.5; 

let res = n.toString() //Usando a função toString()
console.log(res)


let res1 = parseInt(n) + 5; //Usando a função parseInt()
console.log(res1);

let res2 = parseFloat(n) + 5 //Usando a função parseFloat()
console.log(res2);

let numero2 = '10.5'
let numero3 = '55'

let res3 = Number(numero2) //Usando a função Number()
let res4 = Number(numero3) //Usando a função Number()

console.log(res3 + res4)



