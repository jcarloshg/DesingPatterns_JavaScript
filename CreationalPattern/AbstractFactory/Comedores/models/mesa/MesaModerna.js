//============================================================
// clase explicita MesaModerna
//============================================================

const Mesa = require("./Mesa");

class MesaModerna extends Mesa {

    constructor(ancho, largo, color, acabado) {
        super(ancho, largo, color, acabado);
    }

    mostrarMesa() {
        console.log(`[MesaModerna] -> ${this.ancho} ${this.largo} ${this.color} ${this.acabado}`);
    }

}

module.exports = MesaModerna;
