// O spread serve para juntar os dados de um ou mais array, dentro de um outro array

//Spread com arrays
let numeros = [1, 2, 3, 4];


let outros = [...numeros, 5, 6, 7, 8];

console.log(outros);

//Spread com objetos

let info = {
    cidade:"Natal",
    bairro:"planalto",
};

let maisinfo = {
    ...info,
    rua: "Doutor Monte",
    numero: 13,
};

console.log(maisinfo);

//Spread com funções

function adcionarinfo(info) {
    let novasinfo = {
        ...info,
        status:0,
        token:'jvkjdsjsdjf',
        data_cadastro:'...'
    };
    return novasinfo;
}

console.log (adcionarinfo({nome:'Alexsandro', sobrenome:'Leandro'}) );

//Com arrow function seria assim

/*let adcionarinfo = (info) => {
    let novasinfo = {
        ...info,
        statu:0,
        token:'jvkjdsjsdjf',
        data_cadastro:'...'
    };
    return novasinfo;
}

console.log (adcionarinfo({nome:'Alexsandro', sobrenome:'Leandro'}) ); */


