const Pedido = require("./Pedido");

class PedidoCredito extends Pedido {

    constructor(importe) {
        super(importe)
    }

    paga() {
        console.log(`${this.importe} se pago por este pedido`);
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

module.exports = PedidoCredito;