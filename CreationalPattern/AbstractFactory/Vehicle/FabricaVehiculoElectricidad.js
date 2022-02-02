
const FabricaVehiculo = require("./FabricaVehiculo");

const AutomovilElectricidad = require("./AutomovilElectricidad");
const ScooterElectricidad = require("./ScooterElectricidad");

class FabricaVehiculoElectricidad extends FabricaVehiculo {

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} potencia
     * @param {number} espacio
     */
    crearAutomovil(modelo, color, potencia, espacio) {
        return new AutomovilElectricidad(modelo, color, potencia, espacio);
    }

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} 
     */
    crearScooter(modelo, color, potencia) {
        return new ScooterElectricidad(modelo, color, potencia);
    }

}

module.exports = FabricaVehiculoElectricidad;
