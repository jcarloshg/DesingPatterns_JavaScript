
const Cliente = require("./Cliente");
const ClienteContado = require("./ClienteContado");
const ClienteCredito = require("./ClienteCredito");

const main = () => {

    let cliente = new Cliente();

    cliente = new ClienteCredito();
    cliente.nuevoPedido(123);
    cliente.nuevoPedido(456);
    cliente.nuevoPedido(741);

    cliente = new ClienteContado();
    cliente.nuevoPedido(654);
    cliente.nuevoPedido(12);
    cliente.nuevoPedido(8765);

}

main();