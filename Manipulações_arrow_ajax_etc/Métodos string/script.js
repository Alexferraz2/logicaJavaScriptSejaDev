// A melhor forma de manipular string é o substr, pois com ele, podemos fazer tudo que os outros fazem

let nome = 'Alexsandro Leandro da Silva';

// observação: o espaço corresponde a uma string, então dessa maneira ele conta

// Método length
//console.log(nome.length); // método para saber quantos caracteres tem a string

// método indexof
// console.log(nome.indexOf('Leandro')); // método para saber a a posição que começa a string Leandro, lembrando que no javascript a contagem de posições começa pelo número 0

// método slice
// console.log(nome.slice(11, 21)); // o metódo slice ele pega um pedaço da String, basta informa a posição inicial e a popsição final, se informarmos apenas a popsição inicial, ele vai pegar daquela posição até o fim da string, e se informamos um número negativo, ele contará da direita para esquerda.

// Método substr  
// console.log(nome.substr(7, 3)) // Esse é o seguinte, o primeiro valor, será a quantidade de posições que ele pegará da esquerda para direita, no caso de ser positivo e da direita para esquerda no caso de ser negativo, o segundo valor é quantidade de caracteres que ele pegará, a partir do primeiro valor.

// Método replace
/*let resultado = nome.replace('Alexsandro', 'Mony'); // esse método replace, irá pesquisar a string que está no primeiro parâmetro, que é Alexsandro que está na variável nome e substituir pelo outro parâmetro que é Mony, e essa substituição será na variável resultado

console.log("Nome: ", nome);


console.log("Novo nome: ", resultado); */ 

// Método Uppercase e LowerCase, basta colocar o toUpperCase para letras em caixa alta ou toLowercase para letras em caixa baixa

/* let resultado = nome.toUpperCase();

console.log(" O nome em letras maíusculas é: ", resultado); */

// Método trim, serve para remover os espaços inúteis em uma string

/* let primeironome = '    Alexsandro     '
let resultado = primeironome.trim();
console.log(resultado); */

// Método charAt, serve para identificar qual o caractere que ocupa aquela posição

/* let nomecompleto = 'Alexsandr Leandro da Silva'

let resultado = nomecompleto.charAt(5);
console.log(resultado);

let outroresultado = nomecompleto.substr(5, 1); // pode ser usado dessa maneira também, e é até melhor pois usando o substr, pois será necessário informar a posição do caractere e o número 1, e assim precisamos decorar apenas uma função.
console.log(outroresultado);
//outra maneira de saber qual caractere que ocupa aquela popsição é da maneira abaixo
let novoresultado = nomecompleto[5]; // pode ser usado dessa maneira também
console.log(novoresultado); */ 

// Método split serve para retornar em um array apartir do caracetere que for informado, por exemplo se uma string tiver várias letras e, e cada letrar e, ele dividirá e retornará em uma string, pode usar espaço, pontos e vírgulas.

// observação: ele faz diferença entre letras maíusculas e minúsculas. 

/*let nomemeu = 'Alexsandro Leandro da Silva';

let meuresultado = nomemeu.split(' ');

console.log(meuresultado); */

let nomemeu = ['Alexsandro', 'Leandro', 'da', 'silva'];

let meuresultado = nomemeu.join(' ');

console.log(meuresultado);

