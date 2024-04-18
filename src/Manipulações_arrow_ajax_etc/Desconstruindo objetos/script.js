//código abaixo terá que ser descomentado
/*let pessoa = {
    nome: 'Alexsandro',
    sobrenome: 'Leandro',
    idade: 40,
    social:{
        facebook:'Alexsandro Leandro',
        instagram:{
            url:'@alex_ferraz',
            seguidores:'1000',
        }
    },
    nomecompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    } 
};

console.log(pessoa.nomecompleto()) */
//descomente o codigo acima

// a desconstrução do objeto é pegar ou acessar informações específicas dessa objeto e transformar em uma variável, como no exemplo abaixo

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade; */

//Podemos fazer támbem tudo que está lá em cima com apenas uma linha de código, como no exemplo abaixo

// let {nome, sobrenome, idade} = pessoa;

//se quisermos descontruir o objeto, mudando o nome das variáveis (nome, sobrenome, idade), faremos assim colocando aós da variável dois pontos : e o nome da nova variável, como no exemlo abaixo;

//let {nome:pessoaNome, sobrenome:pessoaSobrenome, idade:pessoaIdade} = pessoa;
//console.log(pessoaNome, pessoaSobrenome, pessoaIdade)

//Se quizermos pegar as informações de um objeto que está dentro de um objeto, faremos como no exemplo abaixo pegando o instagram

// let {facebook, instagram} = pessoa.social;

// e sequizermos pegar as informações que estão no objeto principal, e as informações do objeto que está dentro de um objeto faremos como no exemplo abaixo

// let {nome, idade, social:{instagram:{url:instagram, seguidores}} } = pessoa;

// popde ser feito como no exemplo acima, mas também podemos apenas informar o objeto instagram, que ele mostrará todos as propriedades dentro dele

//let {nome, idade, social:{instagram} } = pessoa;

//console.log(nome, idade, instagram);

//usando função

/*function pegarnomecomplpeto(obj) {
    return `${obj.nome} ${obj.sobrenome}`;
} */

// Desconstruindo objeto usando função de forma mais fácil, basta colocar as variáveis dentro dos parâmetros da função

/*function pegarnomecomplpeto({nome, sobrenome, social:{instagram:{url}}}) {
    return `${nome} ${sobrenome} siga em ${url}`;
}

console.log(pegarnomecomplpeto(pessoa));

console.log(pessoa.nomecompleto())

let {social:{facebook}, social:{instagram}} = pessoa;

console.log(facebook, instagram) */


var obj = {
    nome: "Matheus"
}

obj.idade = 30;

console.log(obj);

/* 

{
  idade: 30,
  nome: "Matheus"
}

*/