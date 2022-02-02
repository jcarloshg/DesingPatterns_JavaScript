const Scooter = require("./Scooter");

class ScooterGasolina extends Scooter {

    constructor(modelo, color, potencia) {
        super(modelo, color, potencia);
    }

    mostrarCaracteristicas() {
        console.log('======= [ScooterGasolina]');
        console.log(`     [modelo] -> ${this.modelo}`);
        console.log(`      [color] -> ${this.color}`);
        console.log(`   [potencia] -> ${this.potencia}`);
    }
}

module.exports = ScooterGasolina;
