function clicou() {
    document.getElementById('titulo').innerHTML = "Muito Obrigado!"; // colocará essa mensagem no elemento que tiver o id como titulo.
    alert("Você clicou em um botão!"); //fará aparecer um pop-up com a mensagem entre os parenteses e aspas. 
    document.querySelector('button').innerHTML = 'Clicou'; // alterando o texto do botão após clicarmos nele
}

function vocedigitou(e) {
    if(e.keyCode == 13 || e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById("campo2").value;

        console.log(texto);
    }
    
}

