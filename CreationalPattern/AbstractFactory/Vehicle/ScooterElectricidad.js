const Scooter = require("./Scooter");

class ScooterElectricidad extends Scooter {

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} potencia
     */
    constructor(modelo, color, potencia) {
        super(modelo, color, potencia);
    }

    mostrarCaracteristicas() {
        console.log('======= [ScooterElectricidad]');
        console.log(`     [modelo] -> ${this.modelo}`);
        console.log(`      [color] -> ${this.color}`);
        console.log(`   [potencia] -> ${this.potencia}`);
    }
}

module.exports = ScooterElectricidad;
