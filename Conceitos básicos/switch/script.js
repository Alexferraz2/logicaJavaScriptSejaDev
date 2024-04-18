//Da maneira abaixo o usuário não escolherá o dia da StorageManager, ficando automático quando atualiza a página
//let dia = 3; 
//Da maneira abaixo o usuário escolherá no prompt (janela) o dia na semana quando a página for atualizada. É que o prompt retorna uma string, então antes de passar no switch vc precisa converter ela para um número. Para fazer isso, é só por isso no lugar da sua primeira linha:  +prompt('Escolha um dia da semana'), ou realizar uma conversão de string para number, tem que ver como faz essa conversão.
let dia = +prompt('Escolha um dia da semana');
let diaNome = '';
let diaNomes = '';


switch(dia) {
    case 1: 
        diaNome = 'Segunda-Feira';
        break;
    case 2: 
        diaNome= 'Terça-Feira';
        break;
    case 3:
        diaNome= 'Quarta-Feira';
        break;
    case 4:
        diaNome= 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
            
}

switch(dia) {
    case 6:
        diaNomes = 'Final de semana';
        break;
    case 7:
        diaNomes = 'Final de semana';
        break;
        default:
        diaNomes = 'Dia da semana';
}

if(dia > 7) {
    diaNome = 'Esse dia não existe';
    diaNomes = 'Esse dia não existe';
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;

document.getElementById("fds").innerHTML = "Hoje é: "+diaNomes;

