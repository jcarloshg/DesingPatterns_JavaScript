const FabricaComedor = require("./fabrica/FabricaComedor");
const FabricaComedorFuturista = require("./fabrica/FabricaComedorFuturista");
const FabricaComedorModerno = require("./fabrica/FabricaComedorModerno");
const FabricaComedorRustico = require("./fabrica/FabricaComedorRustico");

const acabados = {
    rustico: "RUSTICO",
    moderno: "MODERNO",
    futurista: "FUTURISTA",
};


const main = () => {

    let mesa = null; // messa abstracta
    let sillas = []; // sillas abstractas
    let cojines = []; // cojines abstractas

    let fabrica = new FabricaComedor(); // fabrica abstracta

    fabrica = new FabricaComedorRustico(); // explicita fabrica FabricaComedorRustico
    // crear mesa rustica
    mesa = fabrica.crearMesa(2, 3, "cafe", acabados.rustico);
    // crear sillas rusticas
    sillas.push(fabrica.crearSilla(1, "cafe", acabados.rustico));
    sillas.push(fabrica.crearSilla(1, "cafe", acabados.rustico));
    sillas.push(fabrica.crearSilla(1, "cafe", acabados.rustico));
    sillas.push(fabrica.crearSilla(1, "cafe", acabados.rustico));
    // crear cojines rusticos
    cojines.push(fabrica.crearCojin("cafe", acabados.rustico));
    cojines.push(fabrica.crearCojin("cafe", acabados.rustico));
    cojines.push(fabrica.crearCojin("cafe", acabados.rustico));
    cojines.push(fabrica.crearCojin("cafe", acabados.rustico));

    console.log("\n\n   ====== FabricaComedorRustico ======     ");
    mesa.mostrarMesa();
    sillas.forEach(silla => silla.mostrarSilla());
    cojines.forEach(cojin => cojin.mostrarCojin());

    mesa = null;
    sillas = [];
    cojines = [];

    fabrica = new FabricaComedorModerno(); // explicita fabrica FabricaComedorModerno
    // crear mesa moderno
    mesa = fabrica.crearMesa(2, 2, "blanco", acabados.moderno);
    // crear sillas moderno
    sillas.push(fabrica.crearSilla(1, "blanco", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "blanco", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "blanco", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "blanco", acabados.moderno));
    // crear cojines moderno
    cojines.push(fabrica.crearCojin("blanco", acabados.moderno));
    cojines.push(fabrica.crearCojin("blanco", acabados.moderno));
    cojines.push(fabrica.crearCojin("blanco", acabados.moderno));
    cojines.push(fabrica.crearCojin("blanco", acabados.moderno));

    console.log("\n\n   ====== FabricaComedorModerno [comedor 1] ======     ");
    mesa.mostrarMesa();
    sillas.forEach(silla => silla.mostrarSilla());
    cojines.forEach(cojin => cojin.mostrarCojin());

    mesa = null;
    sillas = [];
    cojines = [];

    // crear mesa moderno
    mesa = fabrica.crearMesa(1, 1, "Azul fuerte", acabados.moderno);
    // crear sillas moderno
    sillas.push(fabrica.crearSilla(1, "Azul fuerte", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "Azul fuerte", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "Azul fuerte", acabados.moderno));
    sillas.push(fabrica.crearSilla(1, "Azul fuerte", acabados.moderno));
    // crear cojines moderno
    cojines.push(fabrica.crearCojin("Azul fuerte", acabados.moderno));
    cojines.push(fabrica.crearCojin("Azul fuerte", acabados.moderno));
    cojines.push(fabrica.crearCojin("Azul fuerte", acabados.moderno));
    cojines.push(fabrica.crearCojin("Azul fuerte", acabados.moderno));

    console.log("\n\n   ====== FabricaComedorModerno [comedor 2] ======     ");
    mesa.mostrarMesa();
    sillas.forEach(silla => silla.mostrarSilla());
    cojines.forEach(cojin => cojin.mostrarCojin());

    mesa = null;
    sillas = [];
    cojines = [];

    fabrica = new FabricaComedorFuturista(); // explicita fabrica FabricaComedorFuturista
    // crear mesa futurista
    mesa = fabrica.crearMesa(0.5, 0.5, "gris", acabados.futurista);
    // crear sillas futurista
    sillas.push(fabrica.crearSilla(1, "gris", acabados.futurista));
    sillas.push(fabrica.crearSilla(1, "gris", acabados.futurista));
    // crear cojines futurista
    cojines.push(fabrica.crearCojin("gris", acabados.futurista));
    cojines.push(fabrica.crearCojin("gris", acabados.futurista));


    console.log("\n\n   ====== FabricaComedorFuturista [comedor 1] ======     ");
    mesa.mostrarMesa();
    sillas.forEach(silla => silla.mostrarSilla());
    cojines.forEach(cojin => cojin.mostrarCojin());

    mesa = null;
    sillas = [];
    cojines = [];

    // crear mesa futurista
    mesa = fabrica.crearMesa(0.5, 0.5, "coral", acabados.futurista);
    // crear sillas futurista
    sillas.push(fabrica.crearSilla(1, "coral", acabados.futurista));
    sillas.push(fabrica.crearSilla(1, "coral", acabados.futurista));
    // crear cojines futurista
    cojines.push(fabrica.crearCojin("coral", acabados.futurista));
    cojines.push(fabrica.crearCojin("coral", acabados.futurista));


    console.log("\n\n   ====== FabricaComedorFuturista [comedor 2] ======     ");
    mesa.mostrarMesa();
    sillas.forEach(silla => silla.mostrarSilla());
    cojines.forEach(cojin => cojin.mostrarCojin());

};

main();