let info = ['Alexsandro Leandro', 'Alexsandro', 'Leandro', '@alex_ferraz2'];

// se precisar pegar apenas algum ítem do array, basta digitar as variáveis e nas informações que não precisar digita apenas a vírgula, e no console.log, informa as variáveis que quer exibir

let [nomecompleto, , , instragram] = info;

console.log(nomecompleto, instragram);

let info2 = ['alex', 'sandro', 'da silva'];

let [primeiroNome, segundoNome, ultimoNome] = info2;

console.log(primeiroNome, ultimoNome)

const doces = ["Bala", "Chiclete", "Torta de limão"];
const [ figo, pacoca ] = doces;


console.log(pacoca);