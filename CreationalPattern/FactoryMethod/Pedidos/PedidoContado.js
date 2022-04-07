const Pedido = require("./Pedido");

class PedidoContado extends Pedido {

    constructor(importe) {
        super(importe);
    }

    paga() {
        console.log(`${this.importe} se pago por este pedido al contado`);
    }

    /**
     * logic to validate this [pedido]
     * @returns {Boolean}
     */
    valida() {
        // TODO - add logic to validate this [pedido]
        return true;
    }

}

module.exports = PedidoContado;