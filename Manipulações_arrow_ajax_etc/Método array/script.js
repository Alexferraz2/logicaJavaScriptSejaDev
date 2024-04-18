let lista = ['ovo', 'manteiga', 'farinha', 'corante'];

// o metódo toString transforma o array em uma string.

/* let res = lista.toString(); */

// o método join serve para juntar os ítens do array, e transformar em uma string, separando pelo parametro que informamos dentro do parentese

/* let res = lista.join('-') */

// o parametro indexOf() serve para informar a posição do item que inserimos dentro do parentese.

/* let res = lista.indexOf('manteiga'); */

// o parametro shift remove o primeiro e o pop remove o último ítem da lista. E se colocarmos os dois, o primeiro e o último serão removidos

/* lista.pop();
let res = lista */

/* lista.shift();
let res = lista */

// o parametro push adciona um ou mais ítens no array

/*lista.push('açúcar');
let res = lista; */



// o código abaixo serve para alterar algum ítem existente, ou inserir um ítem novo, basta digitar dentro dos cochetes, a posição de um ítem exeistente alterar ou substituir, e uma posição inexistente para inserir, mas se não souber a poosição do novo ítem, basta colocar entre cochetes o seguinte lista.length. mas para inserir ítens o mais indicado é o push. 
/* lista[0] = 'ovos' */

// para remover um ítem do array lista, basta fazer assim lista.splice(2, 1), dessa maneira estamos dizendo o seguinte apagar apartir do ítem de index 2 e apenas um ítem, é como se fosse o intervalo, apartir desse ítem quero apagar tantos ítens.

/* lista.splice(2,1); */

// concatenando arrays basta usar o concat

/* let lista2 = ['batedeira', 'liquidificador', 'forno']

let res = lista.concat(lista2); */

// para ordenar os ítens do array em ordem alfabética usamos o parametro sort(), e se usarmos o parametro reverse(), logo após o parâmetro sort(), ele colocará os ítens em ordem alfabética inversa, e se usarmos o reverse() sem o sort(), os ítens ficarão na ordem reversa em que foi declarados.

// lista.sort();
// lista.reverse();


// a função map vai fazer o seguinte ele vai percorrer todo o array e por em uma variável, no caso os ítens do array da variável lista3, a variável lista4 está com o array vazio, pq ele vai receber os ítens do resultado da função lista3.map(function(casa), o que está em parentese pode ser qualquer nomeclatura, desde que não seja palavras reservadas do javascript. Podemos também fazer o mesmo processo usando o for, faremos o mesmo exemplo do map, mas usando o for, já que os dois percorrem o array. O uso do for será comentado apenas para mostrar o uso do map.
/* let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.map(function(item){
    return item * 2;
});

for(let i in lista3) {
    lista4.push(lista3[i] * 3);
}
    
let res = lista4;

console.log(res); */

// o uso do filter irá realizar um filtro de acordo com o uso do if

/* let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.filter(function(item){
    // o código abaixo pode ser substituído por return (item < 20)? true : false; 
    if (item < 20) {
        return true;
    } else {
        return false;
    }
    
});

    
let res = lista4;

console.log(res); */

// o every retornará true ou false, então ele verificará cada um dos ítens e dependendo da condição informada no if, ele retornará true ou false. No caso do every todos os ítens tem que atender a condição do if, e ele retornará ou true ou false dependendo do que for informado no return do if ou else

/* let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.every(function(item){
    // o código abaixo pode ser substituído por return (item < 20)? true : false; 
    if (item < 20) {
        return true;
    } else {
        return false;
    }
    
});

    
let res = lista4;

console.log(res); */

// o some retornará true ou false, então ele verificará cada um dos ítens e dependendo da condição informada no if, ele retornará true ou false. No caso do some, se algum ítem atender a condição do if, e ele retornará ou true ou false dependendo do que for informado no return do if ou else

/* let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.some(function(item){ 
    // o código abaixo pode ser substituído por retur (item < 20)? true : false;
    if (item < 20) {
        return true;
    } else {
        return false;
    }
    
});

    
let res = lista4;

console.log(res); */

// Find é um método que vai procurar um ítem, mas ele mostra o primeiro ítem que ele achar

/*let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.find(function(item){ 
    // pode ser com if else ou código abaixo do if else
    if(item == 16) {
        return true;
    } else {
        return false;
    }   
    //return (item == 16) ? true : false; // essa maneira é chamada de condição ternária ou operador ternário

    
});

    
let res = lista4;

console.log(res); */

// outra maneira de usar o find
let lista3 = [
    {id:1, nome:'Alexsandro', sobrenome:'Leandro'},
    {id:2, nome:'Mony', sobrenome:'Leandro'},
    {id:3, nome:'Leandro', sobrenome:'Da Silva'},
];

let pessoa = lista3.find(function(item){
    return (item.nome == 'Mony') ? true : false;
    
})

let res = pessoa;

console.log(res);



// FindIndex

/* let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];



lista4 = lista3.findIndex(function(item){ 
    // pode ser com if else ou código abaixo do if else
    if(item == ) {
        return true;
    } else {
        return false;
    }   
    //return (item == 16) ? true : false;

    
});

    
let res = lista4;

console.log(res); */
