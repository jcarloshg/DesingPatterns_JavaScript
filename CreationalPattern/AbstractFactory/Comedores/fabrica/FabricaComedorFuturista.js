
//============================================================
// fabrica esplicita [FabricaComedorFuturista]
//============================================================

const CojinFuturista = require("../models/cojin/CojinFuturista");
const MesaFuturista = require("../models/mesa/MesaFuturista");
const SillaFuturista = require("../models/silla/SillaFuturista");
const FabricaComedor = require("./FabricaComedor");

class FabricaComedorFuturista extends FabricaComedor {

    crearMesa(ancho, largo, color, acabado) {
        return new MesaFuturista(ancho, largo, color, acabado);
    }

    crearSilla(alto, color, acabado) {
        return new SillaFuturista(alto, color, acabado);
    }

    crearCojin(color, acabado) {
        return new CojinFuturista(color, acabado);
    }

}

module.exports = FabricaComedorFuturista;
