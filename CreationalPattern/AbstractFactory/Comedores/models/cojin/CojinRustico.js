//============================================================
// clase explicita CojinRustico
//============================================================

const Cojin = require("./Cojin");

class CojinRustico extends Cojin {

    constructor(color, acabado) {
        super(color, acabado);
    }

    mostrarCojin() {
        console.log(`[CojinRustico] -> ${this.color} ${this.acabado}`);
    }

}

module.exports = CojinRustico;
