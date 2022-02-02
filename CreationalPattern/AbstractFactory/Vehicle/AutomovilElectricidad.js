const Automovil = require("./Automovil");

class AutomovilElectricidad extends Automovil {

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} potencia
     * @param {number} espacio
     */
    constructor(modelo, color, potencia, espacio) {
        super(modelo, color, potencia, espacio);
    }

    mostrarCaracteristicas() {
        console.log('======= [AutomovilElectricidad]');
        console.log(`[modelo] -> ${this.modelo}`);
        console.log(`[color] ${this.color}`);
        console.log(`[potencia] ${this.potencia}`);
        console.log(`[espacio] ${this.espacio}`);
    }
}

module.exports = AutomovilElectricidad;
