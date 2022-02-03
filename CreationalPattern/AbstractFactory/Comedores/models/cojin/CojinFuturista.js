//============================================================
// clase explicita CojinFuturista
//============================================================

const Cojin = require("./Cojin");

class CojinFuturista extends Cojin {

    constructor(color, acabado) {
        super(color, acabado);
    }

    mostrarCojin() {
        console.log(`[CojinFuturista] -> ${this.color} ${this.acabado}`);
    }

}

module.exports = CojinFuturista;
