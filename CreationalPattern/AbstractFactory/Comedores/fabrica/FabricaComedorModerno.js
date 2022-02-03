
//============================================================
// fabrica esplicita [FabricaComedorModerno]
//============================================================

const CojinModerno = require("../models/cojin/CojinModerno");
const MesaModerna = require("../models/mesa/MesaModerna");
const SillaModerna = require("../models/silla/SillaModerna");
const FabricaComedor = require("./FabricaComedor");

class FabricaComedorModerno extends FabricaComedor {

    crearMesa(ancho, largo, color, acabado) {
        return new MesaModerna(color, ancho, color, acabado);
    }

    crearSilla(alto, color, acabado) {
        return new SillaModerna(alto, color, acabado);
    }

    crearCojin(color, acabado) {
        return new CojinModerno(color, acabado);
    }

}

module.exports = FabricaComedorModerno;
