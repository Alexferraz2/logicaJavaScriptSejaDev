// Query selector, ele selecionará o elemento podendo ser pelo id, classe, tag ou name, mas no caso de classe, tag ou name, se tivermos vários elementos, elementos ele selecioná apenas o primeiro que ele encontrar. veja o exemplo de como usar o query selector: para selecionar pela id document.querySelector('#exemplo').innerHTML = 'Novo título'; para elecionar pela classe document.querySelector('.lista').innerHTML = 'Novo título'; para selecionar pela tag document.querySelector('button').innerHTML = 'Novo título'; para selecionar pelo name document.querySelector('name').innerHTML = 'Novo título';

document.querySelector('#exemplo').innerHTML = 'Novo título';

// Query selector all, ele selecionará todos os elementos que for solicitado, e irá retornar em uma array, e como retorna em uma array, para selecionar um ítem desse array se usa o cochetes, depois que a classe, tag ou name for declarado no parenteses dessa maneira [0], será o primeiro ítem do array

document.querySelectorAll('.lista')[1].innerHTML = 'Picanha, carvão, gelo';