
const Cliente = require("./Cliente");
const PedidoCredito = require("./PedidoCredito");

class ClienteCredito extends Cliente {

    creaPedido(importe) {
        return new PedidoCredito(importe);
    }

}

module.exports = ClienteCredito;