// LOOP While

let html = '';

let c = 0;

while(c < 10) {
    html += "Número: "+c+"<br/>";
    c++;
}

// abaixo vamos fazer um for com o mesmo intuito do while


for(let c = 0; c < 10; c++ ) {
    html += "Número: "+c+"</br>";
}
document.getElementById("teste").innerHTML = html;