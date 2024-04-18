//Maneira tradicional de criar uma função
/*function somar(x, y) {
    return x + y;
} */

//Outra maneira de criar uma função, seria criar uma variável e atribuir uma função ela, como no exemplo abaixo

/*let somar = function (x, y) {
    return x + y
}; */

// terceira maneira de criar uma função com o arrow function, que também é atribuindo uma função a uma variável, como exemplo abaixo

/* let somar = (x, y) => {
    return x + y
} */

// Outra forma de usar o arrow function, seria escrevendo o código direto sem as chaves, e dessa maneira não precisaria escrever o return, o return só precisa quando escrevemos as chaves

let somar = (x, y) => x +y;

console.log(somar(10,40));

console.log(somar(90, 50));

console.log(somar(100,60));


//Quando temos apenas um parâmetro podemos fazer da maneira abaixo, com ou sem parentese

let letrasnome = (nome) => nome.length;

console.log(letrasnome('Alexsandro'));