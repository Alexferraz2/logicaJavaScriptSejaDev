let hrs = 0;
let min = 0;
let sec = 0;

let temp;


function comecar(){
    temp = setInterval(() => {timer();
    }, 1000);
}
function pausar(){
    clearInterval(temp);
}
function zerar(){
    clearInterval(temp);

    hrs = 0;
    min = 0;
    sec = 0;

    document.querySelector("#cont").innerHTML = "00:00:00";
}
function timer(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hrs++;
    }

    let format = 
    (hrs < 10 ? "0" + hrs : hrs) +
    ":" +(min < 10 ? "0" + min : min) +
    ":" +(sec < 10 ? "0" + sec : sec)

    document.querySelector("#cont").innerHTML = format;

    
}