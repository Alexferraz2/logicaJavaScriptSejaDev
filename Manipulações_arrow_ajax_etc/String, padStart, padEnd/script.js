// padStart

// padStart serve para que informemos a quantidade de caracteres que uma determinada variável tenha que ter, e se digitarmos menos caracteres do o mínimo exigido ele irá completar com os caracteres que informamos. vejamos no exemplo de uma variável com nome de telefone onde ela recebeu apenas dois digitos, e queremos que o minino de caracter seja 9, então o padStart, completará com caracteres antes dos dois digitos.

let telefone = '54';

console.log(telefone.padStart(9, '*')); // dentro do parenteses, primeiro colocamos quantidade de caracteres, depois colocamos qual caracter será o complemento, no caso do exemplo foi o asterisco.

//padEnd

// padEnd serve para que informemos a quantidade de caracteres que uma determinada variável tenha que ter, e se digitarmos menos caracteres do o mínimo exigido ele irá completar com os caracteres que informamos. vejamos no exemplo de uma variável com nome de celular onde ela recebeu apenas dois digitos, e queremos que o minino de caracter seja 9, então o padEnd, completará com caracteres depois dos dois digitos.

let celular = '90';

document.write(celular.padEnd(9, '*'), '<br>', '<br>')
console.log(celular.padEnd(9, '*')); // dentro do parenteses, primeiro colocamos quantidade de caracteres, depois colocamos qual caracter será o complemento, no caso do exemplo foi o asterisco.

// Exibir apenas uma parte de um valor de uma variável, usaremos o exemplo do número de um cartão de crédito, que ele irá mostrar apenas os quatros últimos digitos.

let cartao = '1234658916573596'; // variável com o número do cartão.

let lastdigits = cartao.slice(-4); // A variável lastdigits, foi criada para pegar a variavel cartao usando o slice para poder pegar uma parte do valor variável cartao. Com o slice o ele pega uma fatia do valor da variável, sendo número positivo ele pega a fatia da esquerda para direita, e sendo negativo ele pega da direita para a esquerda.

let cartaomascarado = lastdigits.padStart(16, '*');

document.write(`Este é o seu cartão? '<br> ${cartaomascarado}` )

console.log('Este é o seu cartão?', `${cartaomascarado}`);

