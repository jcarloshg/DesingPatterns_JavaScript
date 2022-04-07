
class Pedido {

    constructor(importe) {
        this.importe = importe;
    }

    /**
     * valida el producto :)
     */
    valida() {
        throw new Error('[valida] this a method abstract');
    }

    /**
     * paga el producto :)
     */
    paga() {
        throw new Error('[paga] this a method abstract');
    }

}

module.exports = Pedido;