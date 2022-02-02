const AutomovilGasolina = require("./AutomovilGasolina");
const FabricaVehiculo = require("./FabricaVehiculo");
const ScooterGasolina = require("./ScooterGasolina");


class FabricaVehiculoGasolina extends FabricaVehiculo {

    crearAutomovil(modelo, color, potencia, espacio) {
        return new AutomovilGasolina(modelo, color, potencia, espacio);
    };

    crearScooter(modelo, color, potencia) {
        return new ScooterGasolina(modelo, color, potencia);
    };
}

module.exports = FabricaVehiculoGasolina;
