
//============================================================
// ABSTRACT class FabricaComedor
//============================================================

class FabricaComedor {

    crearMesa(ancho, largo, color, acabado) {
        console.log('======= [crearMesa]');
    }

    crearSilla(alto, color, acabado) {
        console.log('======= [crearSilla]');
    }

    crearCojin(color, acabado) {
        console.log('======= [crearCojin]');
    }

}

module.exports = FabricaComedor;
