// 1ª maneira que o professor fez, mas o width que está no seletor #menu-area no css, precisa estar zerado

/*function toggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
} */

//2ª maneira que o professor fez, mas quando eu fiz e clico no ícone do menu, tenho que clicar duas vezes, só consegui resolver colando o style="width: 0px;" no html

function toggle(){
    let menuArea = document.getElementById('menu-area');
    if(menuArea.style.width == '200px' ) {
        menuArea.style.width = '0px'
    } else {
        menuArea.style.width = '200px'
    }
} 


// Essa é maneira que eu fiz
/*function toggle(){
    
    if(document.querySelector('#menu-area').style.width == '200px') {
        hidenToggle()
    } else {
        showToggle()
    }
}

function hidenToggle() {
     document.querySelector('#menu-area').style.width = '0px'
   
    
} 

function showToggle() {
    document.querySelector('#menu-area').style.width = '200px'
} */

