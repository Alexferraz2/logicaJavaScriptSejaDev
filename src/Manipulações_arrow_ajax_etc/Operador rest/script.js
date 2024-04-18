// Operador rest nos permite que com apenas um parâmetro na função, possamos informar vários valores. se no parametros que fica dentro do parenteses de uma função, for informada assim (numeros), e o usuário informar mais de um valor, será exibido apenas o primeiro valor, pois dentro dos parâmetros foi informado apenas um parâmetro, para poder exibir a quantidade que o usuário quizer, precisamos informar dessa maneira(...numeros), aí será exibido todos os valores, podendo ser número ou palavras, e na forma de um array.

/*function adcionar(...numeros) {
    console.log(numeros);
}

adcionar(5, 6, 7, 8, 9,10); */

// Exercício de uma função para juntar spread com rest

function adcionar(nomes, ...novosnomes) {
    let novoconjunto = [
        ...nomes,
        ...novosnomes
    ];

    return novoconjunto;
}

let nomes = ["Alexsandro", "Leandro"];
let outros = adcionar(nomes, "Sandro", "mony", "Cele");

console.log(outros);

