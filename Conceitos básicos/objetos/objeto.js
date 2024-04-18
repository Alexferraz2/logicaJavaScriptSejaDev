let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("VRUM VRUM");
    },
    acelerar:function() {
        if(this.ligado == true) {
          console.log("riiiiichhhh");
        } else{
          console.log(this.nome+" "+this.modelo+" não está ligado!");
        }
        
    }
};

//maneiras de exibir objeto, mas a segunda é a mais usada
console.log(carro['nome']);
console.log(carro.modelo);
console.log("Modelo: "+carro.modelo);
//carro.ligar();
carro.acelerar();

 /* let celular = {
    Fabricante: "Asus",
    Modelo: "ZB634KL-4J020BR",
    Nome: "Smartphone Asus Zenfone Shot Plus",
    Sistema: "Android",
    Dados: function () {
      window.alert("DADOS TÉCNICOS:" + "  " + celular.Fabricante);
    },
  };
  
  let celularSamsung = {
    Fabricante: "Samsung",
    Modelo: "Samsung Galaxy",
    Nome: "Samsung A10 Dual SIM 32 GB 2 GB RAM Vermelho",
    Sistema: "Android",
    Dados2: function () {
      window.alert("DADOS TÉCNICOS:" + " " + celularSamsung.Fabricante);
    },
  };
  
  celular.Dados();
  celularSamsung.Dados2(); */