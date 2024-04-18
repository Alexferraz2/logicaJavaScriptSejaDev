let nome = 'Alexsandro';
let idade = 40;

//Forma que de concatenar variáveis e texto
//let frase = 'Meu nome é '+nome+', eu tenho '+idade+' anos e ano que vem eu farei '+(idade + 1)+' anos de idade!';

// Forma nova de concatenar variáveis e texto, nessa modalidade precisamos apenas abrir com ` e fechar com ` e informar as variáveis dessa maneira ${variável} e digitar o texto normalmente.
let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos de idade!`;
console.log(frase);
document.write(frase);