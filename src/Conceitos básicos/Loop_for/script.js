// LOOP FOR

 /*let texto = '';

 for (let i = 0; i <= 50; i++) {
    texto = texto + i + '<br/>';
} // para fazer um incremento diferente de um, basta colocar assim no incremento i+=2, dessa maneira o incremento será de 2

document.getElementById("teste").innerHTML = texto;  */

// Loop Array

/*let carros = ['Ferrari', 'Fusca', 'Camaro', 'Corolla'];

let html = '<ul>';


for (let i in carros) {
    html += '<li>'+ carros[i] +'</li>';

}

html += '</ul>';

document.getElementById("teste").innerHTML = html; */

//array.map()

/*const numbers = [1, 2, 5, 8, 9];

var dobranumeros = numbers.map((item) => item * 10)

console.log(dobranumeros) */

//array.filter()

//var arrayFilter = [1, 3, 2, 8, 9, 7, 2, 9, 7, 105, 303, 105];

/*eliminando valores dulpicads do array com a função new Set, dentro de array vazio o spread ... e depois new set(array quue quer eliminar os valores)
var eliminandoDuplicados = [... new Set(arrayFilter)] */

/*eliminando valores reetidos com o filter
var numeroDuplicados = arrayFilter.filter((elem, index, arr) => arr.indexOf(elem) === index )

console.log(arrayFilter.length)
console.log(eliminandoDuplicados)
console.log(numeroDuplicados) */

//array.find ele buscará o primeiro valor que satisfizer a condição

/*var pizza = ['mussarela', 'calabresa', 'manteiga', 'ovos']

var foundPizza = pizza.find(p => p.startsWith('c'))

console.log(foundPizza) */


var arrayFilter = [1, 3, 2, 8, 9, 7, 2, 9, 7, 105, 303, 105];

var semdouble = [... new Set(arrayFilter)]
//console.log(semdouble)


var  newarray = semdouble
    .map((item) => item * 2)
    .filter(item => item > 10)
    .reduce((acc, total) => acc + total);

console.log(newarray)
//var arrayReduce = semdouble.reduce((acc, total) => acc + total)

//console.log(arrayReduce)