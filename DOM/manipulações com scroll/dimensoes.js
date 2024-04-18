function subirtela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    }); // essa função foi criada para quando clicar no botão e o scroll top e left for > 0, a página subirá, e com o atributo behavio: 'smooth', a página subirá de forma suave
}

 function decidirbotaoscroll() {
    if(window.scrollY === 0 ) {
        //ocultar o botão
        document.querySelector('.scrollbuntton').style.display = 'none';
    } 
    else {
        //mostrar botão
        document.querySelector('.scrollbuntton').style.display = 'block';
    }
}

//setInterval(decidirbotaoscroll, 1000); // esse comando é um timer em milisegundos

window.addEventListener('scroll', decidirbotaoscroll); // esse comando faz a função decidirbotaoscroll funcionar assim que executamos o scroll

var nome = "Alexsandro";
var sobrenome = "Leandro";
var lastname = "da Silva"
var nomecompleto = nome+" "+sobrenome+" "+lastname;
alert(nomecompleto);