//============================================================
// clase explicita MesaFuturista
//============================================================

const Mesa = require("./Mesa");

class MesaFuturista extends Mesa {

    constructor(ancho, largo, color, acabado) {
        super(ancho, largo, color, acabado);
    }

    mostrarMesa() {
        console.log(`[MesaFuturista] -> ${this.ancho} ${this.largo} ${this.color} ${this.acabado}`);
    }

}

module.exports = MesaFuturista;
