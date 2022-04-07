const Pedido = require("./Pedido");

class Cliente {

    constructor() {
        this._pedidos = [];
    }

    /**
     *
     * @param {number} importe
     */
    creaPedido(importe) {
        throw new Error('[creaPedido] this a method abstract');
    }

    nuevoPedido(importe) {
        const pedido = this.creaPedido(importe);
        if (pedido.valida()) {
            pedido.paga();
            this._pedidos.push(pedido);
        }
    }

}

module.exports = Cliente;