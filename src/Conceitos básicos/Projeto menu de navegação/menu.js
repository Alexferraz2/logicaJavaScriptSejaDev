// primeira maneira de abrir e fechar o menu, tem que ter o menu-opened no css
/*function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
} */

// segunda maneira de abrir e fechar o menu, para fazer isso tem que tirar a classe menu-opened do css, e a id #menu-area, tem que estar com o width: 0; 

function menuToggle() {
    let menuArea = document.getElementById("menu-area"); // a variável menuarea foi criada apenas para facilitar os códigos pra frente

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }

}