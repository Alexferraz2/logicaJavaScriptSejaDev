function rato(){
    if (document.querySelector('button').classList.contains('mover')){
        document.querySelector('button').classList.remove('mover');
        document.querySelector('button').classList.add('parar');
    }
    else {
        document.querySelector('button').classList.add('mover');
        document.querySelector('button').classList.remove('parar');
    }
    
    
}
