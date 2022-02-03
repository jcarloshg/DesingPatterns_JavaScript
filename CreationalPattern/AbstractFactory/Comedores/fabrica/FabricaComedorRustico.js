
//============================================================
// fabrica esplicita [FabricaComedorRustico]
//============================================================

const FabricaComedor = require("./FabricaComedor");
const MesaRustica = require("../models/mesa/MesaRustica");
const SillaRustica = require("../models/silla/SillaRustica");
const CojinRustico = require("../models/cojin/CojinRustico");

class FabricaComedorRustico extends FabricaComedor {

    crearMesa(ancho, largo, color, acabado) {
        return new MesaRustica(ancho, largo, color, acabado);
    }

    crearSilla(alto, color, acabado) {
        return new SillaRustica(alto, color, acabado);
    }

    crearCojin(color, acabado) {
        return new CojinRustico(color, acabado);
    }

}

module.exports = FabricaComedorRustico;
