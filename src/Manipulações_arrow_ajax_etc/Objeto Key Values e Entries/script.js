// O object serve para ler as chaves, valores e entradas de arrays e objetos.

/*let lista = ['ovo', 'farinha', 'manteiga', 'feremento'];

console.log(Object.keys(lista)); // mostra as posições (indices)
console.log(Object.values(lista)); // mostra os valores
console.log(Object.entries(lista)); // para cada ítem criará um array, onde terá a sua posição com o valor. */

let pessoa = {
    nome: 'Alexsandro',
    sobrenome: 'Silva',
    idade: 40,
};

var teste = Object.values(pessoa)
console.log(teste.join(' '))


var testando = document.querySelectorAll('.teste')
function paragrafo () {
    testando.forEach(e => {
        e.innerHTML = teste.join(' ') //a função join foi usada dessa maneira join('') para transformar o array em uma string e juntará, se as aspas que estão dentro do arentese, forem digitadas sem esaço, a string ficara toda unto(AlexsandroSilva40), mas se dermos espaço as strings ficaram espaçadas (Alexsandro Silva 40)
    })
}


paragrafo()

/*console.log(teste)

console.log(Object.keys(pessoa)); // com objetos ele colocará todas chaves dentro de uma array
console.log(Object.values(pessoa)); // com objetos ele colocará todos os valores dentro de uma array
console.log(Object.entries(pessoa)); // para cada ítem criará um array, onde terá a sua posição com o valor.


let carro = {
    modelo: 'Hilux',
    cor: 'Vermelha',
    ano: 2021,
    valor: {
    avista: '200 mil',
    prazo: '300 mil'
    }
   }
   
   console.log(Object.values(Object.keys(carro.valor))) */