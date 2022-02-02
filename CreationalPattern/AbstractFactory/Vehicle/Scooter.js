
//============================================================
// ABSTRACT class Scooter
//============================================================

class Scooter {

    /**
     *
     * @param {string} modelo
     * @param {string} color
     * @param {number} potencia
     */
    constructor(modelo, color, potencia) {
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;
    }

    mostrarCaracteristicas() { }
}

module.exports = Scooter;
