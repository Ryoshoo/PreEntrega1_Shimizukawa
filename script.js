let horas = parseInt(prompt("Cuantas horas de trabajo?"));
let cliente = prompt("Nombre del cliente:");
let tipo = prompt("Es un cliente 'Co-pilot' o 'Enterprise'?");
let fees = 0;
let total = 0;

while(tipo != "Co-pilot" && tipo != "Enterprise"){

    tipo = prompt("Los unicos que podes elegir son: 'Co-pilot' o 'Enterprise'");
};

function clienteFee(type) {
     if (type == "Co-pilot") {

        fees = 40;
    } else if (type == "Enterprise") {

        fees = 70;
    } 
};

function calculo(hours, tipoFee){
    total = hours * tipoFee;
};

clienteFee(tipo);
calculo(horas, fees);
alert("Le tenés que cobrar a " + cliente + " " + total + "USD");
