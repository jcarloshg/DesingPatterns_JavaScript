
const Automovil = require("./Automovil");

class AutomovilGasolina extends Automovil {

    constructor(modelo, color, potencia, espacio) {
        super(modelo, color, potencia, espacio);
    }

    mostrarCaracteristicas() {
        console.log('======= [AutomovilGasolina]');
        console.log(`[modelo] -> ${this.modelo}`);
        console.log(`[color] ${this.color}`);
        console.log(`[potencia] ${this.potencia}`);
        console.log(`[espacio] ${this.espacio}`);
    }
}
module.exports = AutomovilGasolina;
