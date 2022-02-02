
//============================================================
// ABSTRACT class Automovil
//============================================================

class Automovil {

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} potencia
     * @param {number} espacio
     */
    constructor(modelo, color, potencia, espacio) {
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;
        this.espacio = espacio;
    }

    mostrarCaracteristicas() { }
}

module.exports = Automovil;
