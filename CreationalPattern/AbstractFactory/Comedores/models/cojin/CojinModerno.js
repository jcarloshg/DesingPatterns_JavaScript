//============================================================
// clase explicita CojinModerno
//============================================================

const Cojin = require("./Cojin");

class CojinModerno extends Cojin {

    constructor(color, acabado) {
        super(color, acabado);
    }

    mostrarCojin() {
        console.log(`[CojinModerno] -> ${this.color} ${this.acabado}`);
    }

}

module.exports = CojinModerno;
