//============================================================
// clase explicita SillaModerna
//============================================================

const Silla = require("./Silla");

class SillaModerna extends Silla {

    constructor(alto, color, acabado) {
        super(alto, color, acabado);
    }

    mostrarSilla() {
        console.log(`[SillaModerna] -> ${this.alto} ${this.color} ${this.acabado}`);
    }

}

module.exports = SillaModerna;
