const Cliente = require("./Cliente");
const PedidoContado = require("./PedidoContado");

class ClienteContado extends Cliente {

    creaPedido(importe) {
        return new PedidoContado(importe);
    }

}

module.exports = ClienteContado;