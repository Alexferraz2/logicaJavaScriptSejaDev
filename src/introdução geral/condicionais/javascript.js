var hora = 0;

/* Todos esses códigos abaixo são output
document.getElementById("titulo").innerHTML = "Bom dia";
window.alert("Bom dia");
document.write("Bom dia");
console.log("Bom dia"); */


// dessa maneira quando uma condição não for satisfeita ele vai para a próxima condição

/* if (hora < 12) {
    window.alert("Bom dia");
}

else if (hora < 18) {
    window.alert("Boa tarde");
}

else if (hora > 18) {
    window.alert("Boa noite")
} */


// dessa maneira em um mesmo if eu determinei um intervalo usando && como a preposição e

/* if (hora >0 && hora< 12) {
    //Todos esses códigos abaixo são output
    document.getElementById("titulo").innerHTML = "Bom dia";
    document.write("Bom dia");
   
} 
 else if (hora >=12 && hora< 18) {
    document.getElementById("titulo").innerHTML = "Boa tarde";
    document.write("Boa tarde");
    
}

  else if (hora == 0 && hora < 23) {
    document.getElementById("titulo").innerHTML = "Boa noite";
    document.write("Boa noite");
    
} */


// 

// o || significa ou
if (hora ==12 || hora == 18) {
    console.log("Você está na hora do rush")
}
