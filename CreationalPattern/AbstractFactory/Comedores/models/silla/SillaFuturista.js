//============================================================
// clase explicita SillaFuturista
//============================================================

const Silla = require("./Silla");

class SillaFuturista extends Silla {

    constructor(alto, color, acabado) {
        super(alto, color, acabado);
    }

    mostrarSilla() {
        console.log(`[SillaFuturista] -> ${this.alto} ${this.color} ${this.acabado}`);
    }

}

module.exports = SillaFuturista;

