// o exemplo de baixo ele pega o elemento que está no documento pelo id
document.getElementById('exemplo').innerHTML = 'Alexsandro';

// no exemplo de baixo que está pegando os elementos de classe 'lista', ele vai pegar no caso o primeiro que está indicado pelo valor que está dentro do cochetes [0], e trocar pelo valor que está depois do = do inner.HTML, lembrando que a contagem de elementos em programação, sempre começa com o número 0. 
document.getElementsByClassName('lista').innerHTML = 'Itens alterados'; 

// o exemplo de baixo irá pegar o elemento pela tag
document.getElementsByTagName('nome_da_tag')

// o exemplo de baixo irá pegar o elemento pelo name
document.getElementsByName('nome_do_elemento')

//o exemplo abaixo slecionará o primeiro elemento podendo ser um id ou uma classe, mas dentro do parentese terá que informar # antes do nome da id e o . antes do nome da classe
document.querySelector('#exemplo').innerHTML = 'Leandro'

//o exemplo abaixo ira buscar todos elementos que contenha o valor que foi informado dentro do parentese, e ira retornar um array, se quiser escolher um determinado elemento, terá que inserir depois do parenteses .[valor do elemento]
document.querySelectorAll('.lista')





 