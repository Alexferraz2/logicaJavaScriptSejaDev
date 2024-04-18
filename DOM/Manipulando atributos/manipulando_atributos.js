function trocarimagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', filename); // dessa maneira usando o setATtribute iremos inserir (setar) o filename no src
    document.querySelector('.imagem').setAttribute('data-animal', animalname); // dessa maneira o setATtribute iremos inserir (setar) o nome do animal no data-animal
    document.querySelector('.imagem').setAttribute('alt', animalname); /// dessa maneira o setATtribute iremos inserir (setar) o nome do animal no alt
}

function pegaranimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert("O animal é: "+animal);
    
}

