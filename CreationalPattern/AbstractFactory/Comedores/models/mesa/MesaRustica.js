//============================================================
// clase explicita MesaRustica
//============================================================

const Mesa = require("./Mesa");

class MesaRustica extends Mesa {

    constructor(ancho, largo, color, acabado) {
        super(ancho, largo, color, acabado);
    }

    mostrarMesa() {
        console.log(`[MesaRustica] -> ${this.ancho} ${this.largo} ${this.color} ${this.acabado}`);
    }

}

module.exports = MesaRustica;
