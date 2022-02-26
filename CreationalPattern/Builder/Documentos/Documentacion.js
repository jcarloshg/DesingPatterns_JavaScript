

class Documentacion {

    constructor() {
        this.content = [];
    }

    /**
     * add [documento] to [contenido]
     * @param {string} document 
     */
    addDocument(document) {
        throw new Error('[addDocument] this a method abstract');
    }

    /**
     * print the [documents]
     */
    printContent() {
        throw new Error('[addDocument] this a method abstract');
    }

}


module.exports = Documentacion;