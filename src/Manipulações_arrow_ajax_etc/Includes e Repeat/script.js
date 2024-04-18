// O includes() é uma função que serve para procurar string ou arrays basta digitar no caso do console.log dentro do parenteses a variável acrescido de ponto e a função includes, como no exemplo abaixo. Se for um array com strings, o string só será true se for o nome da string completa e respeitando maíusculas e minúsculas, no caso de uma variável com string, podemos fazer com a string completa ou buscando apenas uma ou mais letras.

let lista = ['ovo', 'queijo', 'manteiga', 'farinha'];

console.log(lista.includes('queijo'));

let nome = 'Alexsandro ';

console.log(nome.includes('x'));

// O includes pde ser codado da maneira abaixo após declarar a string ou array, inserir o .includes(com o que deseja buscar)

let a = '100, 200, 300'.includes(200);
console.log(a);



// A função repeat() serve para repetir uma string ou uma variável que contenha uma string quantas vezes quizer

let number = '20';

console.log('Alexsandro'.repeat(10));


document.write('Alexsandro'.repeat(10)); 


