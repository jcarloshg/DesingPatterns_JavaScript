//============================================================
// clase explicita SillaRustica
//============================================================

const Silla = require("./Silla");

class SillaRustica extends Silla {

    constructor(alto, color, acabado) {
        super(alto, color, acabado);
    }

    mostrarSilla() {
        console.log(`[SillaRustica] -> ${this.alto} ${this.color} ${this.acabado}`);
    }

}

module.exports = SillaRustica;
