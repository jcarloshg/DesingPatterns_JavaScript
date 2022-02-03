//============================================================
// clase abstracta Mesa
//============================================================

class Mesa {

    constructor(ancho, largo, color, acabado) {
        this.ancho = ancho;
        this.largo = largo;
        this.color = color;
        this.acabado = acabado;
    }

    mostrarMesa() { }

}

module.exports = Mesa;
