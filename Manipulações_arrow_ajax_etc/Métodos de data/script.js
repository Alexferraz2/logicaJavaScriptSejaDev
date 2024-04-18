// A função new Date(), pega a data do dispositivo que está sendo executado

// a função new date() vai mostrar todas as informações de uma data, como: semana, mês, dia, ano, hora, fuso horário e etc, mas podemos especificar qual informação que querermos que seja exibida, como os exemplos abaixo nos comentários:

/*console.log(d.toDateString() ); // exibe a hora de forma resumida
console.log(d.toUTCString() ); // exibe a hora sem o fuso horário, horário europeu
console.log(d.toString() ); // exibe da maneira que faz a mesma coisa que retorna a variável d */

// no exemplo abaixo usamos uma variável descrita como d, e essa variável recebeu a função new Date(), que mostrar todas informações da date, mas podemos determinar o que queremos ver. veja alguns exemplos abaixo que colocamos na variável d.

// exemplo: d.getFullYear - que mostrar o ano que estamos
// d.getmonth mostrar o mês que estamos em número, lembrando que a contagem dos meses inicia com o número 0, então mês 12, passa a ser mês 11.
//tem vários d.get.... , basta ir experimentando, lembrando também que o d é o nome que dei a uma variável, coloca o nome da variável depois coloca o ponto e depois o get, aí irá aparecer as opções, depois da opção coloca o parentese, pois se trata de uma função.

// o Date.now() ele mostrará quantos milisegundos se passarem desde 01 janeiro de 1970 até o momento atual.

// a função set serve para manipular ou mudar os dados de uma data que quizermos basta depois do ponto da variável d colocar o set + a informação de data que queremos setar, dessa maneira d.setmonth(11), isso quer dizer que o mês que será exibido será o mês de dezembro (lembrando que a contagem no javascript começa do zero), depois que declararmos a variável d, setamos a variável d e depois declaramos a variável novoValor recebendo d, para depois declarar o console.log
/* let d = new Date();

d.setMonth(9);
let novoValor = d;

console.log(novoValor) */

let d = new Date();

d.setDate(d.getDate() - 120); // o getDate, pegará o dia atual que está na variável d que recebe o new Date(), isso tambem ser para o Millisecon, Second, Hour, Month e Year, basta seguir o exemplo.

let novoValor = d;

console.log(novoValor)



